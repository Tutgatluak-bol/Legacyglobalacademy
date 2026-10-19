
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const folders = ["public", "src/assets"];
const extensions = new Set([".jpg", ".jpeg"]);

async function compressFolder(folder) {
  let entries;

  try {
    entries = await fs.readdir(folder, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const file = path.join(folder, entry.name);

    if (entry.isDirectory()) {
      await compressFolder(file);
      continue;
    }

    if (!extensions.has(path.extname(entry.name).toLowerCase())) {
      continue;
    }

    const tempFile = `${file}.optimized`;

    try {
      const original = await fs.stat(file);

      await sharp(file)
        .rotate()
        .resize({
          width: 2400,
          height: 1800,
          fit: "inside",
          withoutEnlargement: true,
        })
        .jpeg({
          quality: 82,
          mozjpeg: true,
        })
        .toFile(tempFile);

      const optimized = await fs.stat(tempFile);

      if (optimized.size < original.size) {
        await fs.rename(tempFile, file);

        console.log(
          `${entry.name}: ${(original.size / 1048576).toFixed(2)} MB -> ${(optimized.size / 1048576).toFixed(2)} MB`
        );
      } else {
        await fs.unlink(tempFile);
        console.log(`${entry.name}: already smaller; unchanged`);
      }
    } catch (error) {
      try {
        await fs.unlink(tempFile);
      } catch {}

      console.error(`Failed: ${file}`, error.message);
    }
  }
}

for (const folder of folders) {
  await compressFolder(folder);
}

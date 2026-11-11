"""Recreate the delivery assets with Pillow; originals remain unchanged.

Install Pillow in an isolated environment before running this maintenance tool.
It is not a build or runtime dependency of the website.
"""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent / "public"
images = root / "images"
logo = Image.open(images / "karave-koushalya-logo-v3.png").convert("RGBA")
portrait = Image.open(images / "narayana-gowda-transparent.png").convert("RGBA")

def webp(image, name):
    target = images / name
    image.save(target, "WEBP", lossless=True, quality=100, method=6, exact=True)
    assert Image.open(target).convert("RGBA").tobytes() == image.tobytes()
    print(f"{target.name}: {target.stat().st_size} bytes (lossless)")

for size in (128, 256):
    webp(logo.resize((size, size), Image.Resampling.LANCZOS), f"karave-koushalya-logo-{size}.webp")
for size in (480, 960):
    webp(portrait.resize((size, size), Image.Resampling.LANCZOS), f"narayana-gowda-transparent-{size}.webp")
webp(portrait, "narayana-gowda-transparent.webp")
logo.resize((64, 64), Image.Resampling.LANCZOS).save(root / "favicon.png", optimize=True)
logo.resize((512, 512), Image.Resampling.LANCZOS).save(images / "karave-koushalya-social.png", optimize=True)

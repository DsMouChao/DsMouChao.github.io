from PIL import Image, ImageDraw
import os

def create_placeholder(filename, size=(400, 300), text="Placeholder", bg_color=(0, 39, 76), text_color=(255, 203, 5)):
    # Create directory if it doesn't exist
    os.makedirs('images', exist_ok=True)
    
    # Create image with background color
    img = Image.new('RGB', size, bg_color)
    draw = ImageDraw.Draw(img)
    
    # Draw text
    text_size = min(size) // 10  # Approximate text size
    text_x = size[0] // 4
    text_y = size[1] // 3
    
    # Draw text
    draw.text((text_x, text_y), text, fill=text_color)
    
    # Save image
    img.save(f'images/{filename}')

# Create placeholder images
create_placeholder('project-placeholder.jpg', text='Project Preview')
create_placeholder('github-avatar.jpg', size=(200, 200), text='GitHub')
create_placeholder('photo1.jpg', text='Photo 1')
create_placeholder('photo2.jpg', text='Photo 2')
create_placeholder('photo3.jpg', text='Photo 3')
create_placeholder('fallback-image.jpg', text='Image Not Found') 
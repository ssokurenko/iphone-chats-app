# HTML5 app: iPhone Message Chat Emulator

## Demo

http://iphone-chats.html5space.org/

## Screenshot
![iphone chats screenshot][iphone]
[iphone]: http://cl.ly/image/1D3H0G34250w/iphone-chats.png "iphone chats screenshot"

## Usage
1. Press the home button to reset the images
2. Type message text to the input field and press enter
3. Create several message
4. When ready press the camera button at the left of the input field to take the screenshot
5. Click the right button on the screenshot image and use "Save image as..." to save the file


## Build instructions
1. Clone the project
2. Open the project folder
    ```
    cd iphone-chats
    ```
3. Update dependencies
    ```
    sudo npm update
    bower update
    ```
4. Build the app (compressed code will be available in the dist folder)
    ```
    grunt build
    ```
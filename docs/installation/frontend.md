# Frontend Setup Guide
 -  Install [NodeJS >= 18.17.1 LTS](https://nodejs.org/en/download/){:target="_blank"}
 -  Clone this repository: 
    ```
    git clone https://github.com/ehsan18t/unilink.git
    ```
 -  Open project folder in terminal
    ```
    cd unilink-server
    ```
 -  Install required packages
    ```
    npm install
    ```
 -  add `.env.local` file with following environment variables
    ```
    NEXT_PUBLIC_HOST=http://127.0.0.1:8000/
    ```
 -  Run the server
    ```
    npm run dev
    ```
 -  Now you should be able to see the server at [http://localhost:3000](http://localhost:3000)

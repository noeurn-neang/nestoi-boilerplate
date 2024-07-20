echo "Script executed from: ${PWD}"

npm install
npm run build

pm2 stop scrapperapi
pm2 delete scrapperapi
pm2 start npm --name "scrapperapi" -- start
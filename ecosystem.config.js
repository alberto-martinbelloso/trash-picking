module.exports = {
 apps: [
  {
   name: "trash-picking",
   script: "./www",
   env: {
    PORT: 3000,
    NODE_ENV: "production"
   }
  }
 ],
 deploy: {
  production: {
   user: "ubuntu",
   host: "ec2-3-133-141-56.us-east-2.compute.amazonaws.com",
   key: "/home/belloso/Documents/itu/crossdit/alberto-aws.pem",
   ref: "origin/master",
   repo: "https://github.com/alberto-martinbelloso/trash-picking.git",
   path: "/home/ubuntu/trash-picking",
   "post-deploy":
    "npm install && pm2 startOrRestart ecosystem.config.js"
  }
 }
};

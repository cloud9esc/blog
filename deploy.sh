echo Deploy to $1;

rsync -vr --exclude-from '.gitignore' --exclude '.git' . cloud9esc@$1:~/app;

ssh cloud9esc@$1 "cd ~/app/production && docker-compose up -d --build && docker container prune -f && docker image prune -f"

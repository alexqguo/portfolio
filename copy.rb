time = Time.now
command = "
rsync -av --exclude=\".*\" . ../github-portfolio;
cd ~/Programming/github-portfolio;
git add -A;
git commit -m 'commit #{time}';
cd ~/Programming/portfolio
"

exec command
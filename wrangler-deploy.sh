echo "Deploying to: rayatiga"
read -p "Enter commit message: " commitMessage
wrangler pages deploy public/ --project-name "rayatiga" --commit-message "$commitMessage"

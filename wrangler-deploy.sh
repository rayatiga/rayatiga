read -p "Commit message: " commitMessage
wrangler pages deploy public/v2/ --project-name "rayatiga" --commit-message "$commitMessage"

#!/bin/bash

printf "Deploying this folder to [rayatiga] Cloudflare pages project...\n\n"
wrangler pages deploy . --project-name rayatiga

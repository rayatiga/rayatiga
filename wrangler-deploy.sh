#!/bin/bash

printf "Deploying public/ to [rayatiga] Cloudflare pages project...\n"
wrangler pages deploy public --project-name rayatiga

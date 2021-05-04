#!/usr/bin/env bash

usage() {
    echo "Usage:"
    echo "./deploy.sh <aws_profile_name> <s3_bucket_name>"
    echo "Example:"
    echo "If you have an aws profile in your aws credentials file of 'profile1'"
    echo "And if you want to deploy to an s3 bucket of the name 'mybucket.com'"
    echo "Then do:"
    echo "./deploy.sh profile1 mybucket.com"
}

if [[ -z $1 ]]; then
    usage
    exit 1
fi
if [[ -z $2 ]]; then
    usage
    exit 1
fi

if [[ ! -d ./dist/static/ ]]; then
    echo "Failed to find ./dist/static/ directory. not deploying"
    echo "Make sure you run this deploy script from the root of this repo and that the dist/static/ folder exists"
    exit 1
fi

aws s3 cp --profile "$1" ./dist/static/ s3://"$2"/ --recursive --cache-control "public,max-age=500"

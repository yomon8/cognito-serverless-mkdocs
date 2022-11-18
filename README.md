# cognito-serverless-mkdocs

![](image.drawio.png)

## Requirement

- Serverless Framework Version 3
- nodejs
- python
- Cognito UserPool & Application Client

## How to deploy

### Config


```sh
cp config.json{.sample,}
vi config.json
```

### Deploy AWS
install npm modules.

```sh
npm install
```

deploy AWS resources with Serverless Framework.

```sh
sls deploy
```

### Deploy MkDocs

install MkDocs.

```sh
cd ./mkdocs
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

build docs and sync static files to S3 bucket.

```sh
mkdocs build
aws s3 sync ./site s3://your-bucket-name
```



## Refs

- [cognito-at-edge](https://github.com/awslabs/cognito-at-edge)
- [serverless-plugin-cloudfront-lambda-edge](https://github.com/silvermine/serverless-plugin-cloudfront-lambda-edge)
- [cloudfront-authorization-at-edge](https://github.com/aws-samples/cloudfront-authorization-at-edge)
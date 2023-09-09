function resetAWSEnvVars () {
  delete process.env.AMAZON_REGION
  delete process.env.AWS_ACCESS_KEY
  delete process.env.AWS_ACCESS_KEY_ID
  delete process.env.AWS_CONFIG_FILE
  delete process.env.AWS_DEFAULT_REGION
  delete process.env.AWS_LAMBDA_FUNCTION_NAME
  delete process.env.AWS_PROFILE
  delete process.env.AWS_REGION
  delete process.env.AWS_SDK_LOAD_CONFIG
  delete process.env.AWS_SECRET_ACCESS_KEY
  delete process.env.AWS_SECRET_KEY
  delete process.env.AWS_SESSION_TOKEN
  delete process.env.AWS_SHARED_CREDENTIALS_FILE
}

module.exports = { resetAWSEnvVars }

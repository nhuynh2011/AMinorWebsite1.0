import boto3

#This table is for testing purposes ONLY

dynamodb = boto3.resource('dynamodb', region_name='us-east-1', endpoint_url="http://localhost:8000")

table = dynamodb.Table('AMinorData')

table.delete()

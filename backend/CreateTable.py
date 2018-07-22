import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1', endpoint_url="http://localhost:8000")

table = dynamodb.create_table(
    TableName="AMinorData",
    KeySchema=[
        {
            'AttributeName': 'page',
            'KeyType': 'HASH' #Partition Key
        }
    ],
    AttributeDefinitions=[
        {
            'AttributeName': 'page',
            'AttributeType': 'S'
        }
    ],
    ProvisionedThroughput={
        'ReadCapacityUnits': 1,
        'WriteCapacityUnits': 1
    }
)

print("Table status: ", table.table_status)

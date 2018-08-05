import boto3
import json
import decimal

# Helper class to convert a DynamoDB item to JSON.
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if o % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)

dynamodb = boto3.resource('dynamodb', region_name='us-east-1', endpoint_url="http://localhost:8000")

table = dynamodb.Table('AMinorData')

page = "notfound"

response = table.update_item(
    Key={
        'page': page
    },
    UpdateExpression="set content.text_2 = :t, content.redirect = :r",
    ExpressionAttributeValues={
        ':t': "Page does not exist.  Rerouting to home page in 5 seconds...",
        ':r': "http://localhost:8000"
    },
    ReturnValues="UPDATED_NEW"
)

print("UpdateItem succeeded:")
print(json.dumps(response, indent=4, cls=DecimalEncoder))

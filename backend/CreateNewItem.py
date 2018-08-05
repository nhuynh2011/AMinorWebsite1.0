import boto3
import json
import decimal

# Helper class, converts DynamoDB item to JSON
class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            if abs(o) % 1 > 0:
                return float(o)
            else:
                return int(o)
        return super(DecimalEncoder, self).default(o)

dynamodb = boto3.resource('dynamodb', region_name="us-east-1", endpoint_url="http://localhost:8000")

table = dynamodb.Table('AMinorData')

page = "notfound"

response = table.put_item(
    Item={
        'page': page,
        'content': {
            "text": "Sorry, page not found.  Redirecting to home page!"
        }
    }
)

print("PutItem succeeded:")
print(json.dumps(response, indent=4, cls=DecimalEncoder))

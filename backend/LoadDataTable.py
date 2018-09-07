import boto3
import json
import decimal

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

table = dynamodb.Table('AMinorData')

with open("data_new_discography.json") as json_file:
    data = json.load(json_file, parse_float = decimal.Decimal)
    for entry in data:
        page = entry['page']
        content = entry['content']
        print(page, "'s content:", content)
        table.put_item(
            Item={
                'page' : page,
                'content' : content
            }
        )

import json

def handler(event, context):
    method = event['httpMethod']
    body = json.loads(event['body']) if event.get('body') else None
    
    if method == 'GET':
        return {
            'statusCode': 200,
            'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
            'body': json.dumps({'message': 'Hello from Python!'})
        }
    elif method == 'POST':
        return {
            'statusCode': 200,
            'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
            'body':json.dumps({'received_data': body})
        }
 
FORMAT: 1A

# Toolbox Application / Codec tools
文字列のエンコード/デコードや、暗号化、ハッシュ化などの機能を提供するAPIたち。

# Group String Encoder
文字列の、指定された文字エンコーディングでのバイト列を計算する。

## GET /enc{?encoding,output}

変換元文字列(`raw`)と、変換後バイト列(`encoded`)、文字エンコーディング(`encoding`)、変換後バイト列のエンコード方法(`output`)を
格納したJSONを返却する。

+ Parameters
    + encoding (required, string, `Windows-31J`) ... 文字列のエンコーディング。
    + output (required, string, `Base64`) ... エンコード後のバイト列を文字列化する方法。`base64`, `hex`, `UrlEncode`

+ Response 200 (application/json)

    ```json
    {
      "raw": "target string",
      "converted": "Y29udmVydGVkIHN0cmluZw==",
      "encoding": "Windows-31J",
      "output": "base64"
    }
    ```

# Group Message Digest
文字列を指定された方法でバイト列化して、ハッシュ値を計算する。

# Group Cryption
文字列を指定された方法でバイト列化して、暗号化後のバイト列を計算する。

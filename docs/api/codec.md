FORMAT: 1A

# Toolbox Application / Codec tools
文字列のエンコード/デコードや、暗号化、ハッシュ化などの機能を提供するAPIたち。

# Group Codec Convert
文字列の、指定された文字エンコーディングでのバイト列を計算する。

## GET /codec/enc{?raw,s->b,b->b,b->s}


+ Parameters
    + raw (required, string) ... エンコード対象の文字列。
    + s2b = `"plain"` (required, string) ... エンコード対象の文字列をバイト列化する方法。

        `plain`の場合には、`url-encode:utf-8`として扱う。

        + Values
            + `base64:utf-8`

    + b2b (required, string) ... 変換するエンコーディング。
    + b2s (required, string) ... エンコード後のバイト列を文字列化する方法。`base64`, `hex`, `UrlEncode`

+ Response 200 (application/json)

    ```json
    {
      "raw": "変換対象の文字列",
      "converted": "lc+Kt5HOj9uCzJW2jpqX8Q==",
      "s->b": ":utf-8",
      "b->b": "Windows-31J",
      "b->s": "base64"
    }
    ```

# Group Message Digest
文字列を指定された方法でバイト列化して、ハッシュ値を計算する。

# Group Cryption
文字列を指定された方法でバイト列化して、暗号化後のバイト列を計算する。

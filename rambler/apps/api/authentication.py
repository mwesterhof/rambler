from rest_framework.authentication import (
    TokenAuthentication as TokenAuthenticationOrig)


class TokenAuthentication(TokenAuthenticationOrig):
    keyword = 'Rambler'

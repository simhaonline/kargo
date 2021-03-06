http:
  port: 8080
admin:
  port: 9876
  host: localhost
apiEndpoints:
  admin:
    host: 'express-gateway'
  wms:
    host: '*'
    paths: '/wms*'
    scopes: ["wms"]
  wmts:
    host: '*'
    paths: '/wmts/*'
    scopes: ["wmts"]
  wfs:
    host: '*'
    paths: '/wfs*'
    scopes: ["wfs"]
  wcs:
    host: '*'
    paths: '/wcs*'
    scopes: ["wcs"]    
  k2:
    host: '*'
    paths: '/k2/*'
    scopes: ["k2"]
  s3: 
    hosts: '*'
    paths: '/s3/*'
    scopes: ["s3"]    

serviceEndpoints:
  admin: 
    url: 'http://localhost:9876'
  wms:
    url: 'http://mapproxy:80/service'
  wmts:
    url: 'http://mapproxy:80/wmts'    
  wfs:
    url: 'http://mapserver:80/cgi-bin/wfs'
  wcs:
    url: 'http://mapserver:80/cgi-bin/wcs'    
  k2:
    url: 'http://k2:8080'
  s3:
    url: 'http://localhost:9876/s3'    

policies:
  - cors
  - scopes
  - jwt
  - log
  - request-transformer
  - proxy
  - rate-limit
  - metrics

pipelines:
  admin:
    apiEndpoints:
      - admin
    policies:
      - proxy:
          - action:
              serviceEndpoint: admin
              changeOrigin: true
              stripPath: true
  wms:
    apiEndpoints:
      - wms
    policies:
      - metrics:              
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true 
              audience: ${SUBDOMAIN}
              passThrough: true  
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true            
              audience: ${SUBDOMAIN}
      - scopes:
      - request-transformer:
          - action:
              headers:
                add:
                  X-Script-Name: "'/wms'"      
      - proxy:
          - action:
              serviceEndpoint: wms 
              changeOrigin: true
              stripPath: true       
  wmts:
    apiEndpoints:
      - wmts
    policies:
      - metrics:              
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true 
              audience: ${SUBDOMAIN}
              passThrough: true  
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true            
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: wmts 
              changeOrigin: true
              stripPath: true                            
  wfs:
    apiEndpoints:
      - wfs
    policies:
      - metrics:               
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
              passThrough: true                    
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: wfs 
              changeOrigin: true
              stripPath: true
  wcs:
    apiEndpoints:
      - wcs
    policies:
      - metrics:               
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
              passThrough: true             
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: wcs 
              changeOrigin: true
              stripPath: true
  k2:
    apiEndpoints:
      - k2
    policies:
      - metrics:                   
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
              passThrough: true                              
      - jwt:
          - action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: k2
              changeOrigin: true
              stripPath: true
  s3:
    apiEndpoints:
      - s3
    policies:
      - metrics:  
      - cors:
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'authBearer'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN} 
              passThrough: true             
      - jwt:
          - condition:
              name: anonymous
            action:
              jwtExtractor: 'query'
              jwtExtractorField: 'jwt'
              secretOrPublicKey: ${EXPRESS_GATEWAY_KEY_SECRET}
              checkCredentialExistence: true
              audience: ${SUBDOMAIN}
      - scopes:
      - proxy:
          - action:
              serviceEndpoint: s3
              changeOrigin: true
              stripPath: true

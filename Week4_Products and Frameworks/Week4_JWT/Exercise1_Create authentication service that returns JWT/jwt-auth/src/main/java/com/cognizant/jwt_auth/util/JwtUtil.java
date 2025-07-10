package com.cognizant.jwt_auth.util;
  
  import io.jsonwebtoken.Jwts;
  import io.jsonwebtoken.security.Keys;
  import org.springframework.stereotype.Component;
  
  import java.security.Key;
  import java.util.Date;
  
  @Component
  public class JwtUtil {
      private static final String SECRET_KEY = "MySecretKeyForJwtMySecretKeyForJwt"; // 32+ characters
  
      public String generateToken(String username) {
          Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
          return Jwts.builder()
                  .setSubject(username)
                  .setIssuedAt(new Date(System.currentTimeMillis()))
                  .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                  .signWith(key)
                  .compact();
      }
  }
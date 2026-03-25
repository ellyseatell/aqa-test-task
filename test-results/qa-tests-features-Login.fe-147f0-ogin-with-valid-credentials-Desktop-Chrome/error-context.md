# Page snapshot

```yaml
- generic [ref=e3]:
  - img "Vikunja" [ref=e5]
  - generic [ref=e18]:
    - heading "Welcome Back!" [level=2] [ref=e20]
    - generic [ref=e22]:
      - heading "Login" [level=2] [ref=e23]
      - generic [ref=e25]:
        - text: Using Vikunja installation at localhost:8080
        - button "change" [ref=e26] [cursor=pointer]
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e30]: Username Or Email Address
          - textbox "Username Or Email Address" [active] [ref=e32]:
            - /placeholder: e.g. frederick
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Password
            - link "Forgot your password?" [ref=e36] [cursor=pointer]:
              - /url: /get-password-reset
          - generic [ref=e37]:
            - textbox "Password" [ref=e38]:
              - /placeholder: e.g. •••••••••••
            - button "Show the password" [ref=e39] [cursor=pointer]:
              - img [ref=e40]
          - paragraph
        - generic [ref=e43]:
          - checkbox "Stay logged in" [ref=e44]
          - text: Stay logged in
        - button "Login" [ref=e45] [cursor=pointer]:
          - generic [ref=e46]: Login
        - paragraph [ref=e47]:
          - text: Don't have an account yet?
          - link "Create account" [ref=e48] [cursor=pointer]:
            - /url: /register
```
# Page snapshot

```yaml
- generic [ref=e3]:
  - img "Vikunja" [ref=e5]
  - generic [ref=e18]:
    - heading "Welcome Back!" [level=2] [ref=e20]
    - generic [ref=e22]:
      - heading "Create account" [level=2] [ref=e23]
      - generic [ref=e25]:
        - text: Using Vikunja installation at localhost:8080
        - button "change" [ref=e26] [cursor=pointer]
      - generic [ref=e28]:
        - generic [ref=e29]:
          - generic [ref=e30]: Username
          - textbox "Username" [active] [ref=e32]:
            - /placeholder: e.g. frederick
        - generic [ref=e33]:
          - generic [ref=e34]: Email address
          - textbox "Email address" [ref=e36]:
            - /placeholder: e.g. frederic@vikunja.io
        - generic [ref=e37]:
          - generic [ref=e38]: Password
          - generic [ref=e39]:
            - textbox "Password" [ref=e40]:
              - /placeholder: e.g. •••••••••••
            - button "Show the password" [ref=e41] [cursor=pointer]:
              - img [ref=e42]
          - paragraph
        - button "Create account" [disabled]:
          - generic: Create account
        - paragraph [ref=e44]:
          - text: Already have an account?
          - link "Login" [ref=e45] [cursor=pointer]:
            - /url: /login
```
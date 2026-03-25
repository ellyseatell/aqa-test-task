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
      - generic [ref=e27]:
        - generic [ref=e29]: Too Many Requests
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]: Username
            - textbox "Username" [ref=e34]:
              - /placeholder: e.g. frederick
              - text: user1774438510156
          - generic [ref=e35]:
            - generic [ref=e36]: Email address
            - textbox "Email address" [ref=e38]:
              - /placeholder: e.g. frederic@vikunja.io
              - text: test1774438509783@mail.com
          - generic [ref=e39]:
            - generic [ref=e40]: Password
            - generic [ref=e41]:
              - textbox "Password" [ref=e42]:
                - /placeholder: e.g. •••••••••••
                - text: Welcome@123
              - button "Show the password" [ref=e43] [cursor=pointer]:
                - img [ref=e44]
          - button "Create account" [ref=e46] [cursor=pointer]:
            - generic [ref=e47]: Create account
          - paragraph [ref=e48]:
            - text: Already have an account?
            - link "Login" [ref=e49] [cursor=pointer]:
              - /url: /login
```
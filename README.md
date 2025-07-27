# AC-Career

## Deployment

Create Kubernetes secrets separately from the repository. For example:

```bash
kubectl create secret generic jwt-secret --from-literal=JWT_SECRET=your_token
```

Place application environment variables in a `.env` file based on `.env.example` and keep that file outside version control.

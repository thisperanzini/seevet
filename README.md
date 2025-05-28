# seevet
# Acesse a pasta
cd seevet_website_final

# Inicialize o repositório Git (caso ainda não esteja)
git init
git add .
git commit -m "Inicial"
gh repo create seevet-website --public --source=. --push

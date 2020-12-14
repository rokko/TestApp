# Setup

Da terminale
```
// scaricare repo
git clone https://github.com/Mobile-Developer-School-Tree/authentication.git

// entrare nella directory del progetto
cd authentication

// installare le dipendenze
npm install
// oppure
yarn install

// avviare expo
npm start
```

## Comandi GIT
Una volta clonato il progetto saremo sulla branch `master`.
### Branch
Per creare una nuova branch usare:
```
git checkout -b nomeBranch
```
Per passare da una branch ad un'altra invece:
```
git checkout nomeBranch
```
### Pull
Quando vogliamo scaricare aggiornamenti da una branch basta usare:
```
git pull origin nomeBranch
```
### Push
Quando facciamo delle modifiche in una branch e vogliamo aggiornare la repo online la sequenza dei comandi è la seguente:
```
git add -A
git commit -m "descrizione commit"
git push origin nomeBrach
```
### Merge
Se vogliamo sincronizzare due branch eseguire
```
git merge nomeBranch
```
Per esempio, se siamo in una branch chiamata `myBranch` e vogliamo importare i cambiamenti che sono stati fatti in `master` bisogna utilizzare
```
git merge master
```
**NOTA BENE**
Bisogna fare in modo che la branch da cui vogliamo prendere i dati sia aggiornata in locale, quindi prima dobbiamo [fare pull](#pull):
```
git pull origin master
```
Dopodiché possiamo fare merge:
```
git merge master
```
### Passaggio da branch a branch
Quando passiamo da una branch all'altra dobbiamo assicurarci di avere pushato i cambiamenti fatti, quindi salviamo tutti i file e ripetiamo la [sequenza dei comandi per il push](#push), altrimenti possiamo direttamente andare nell'altra branch, per esempio:
```
git checkout master
```
Se non incotriamo conflitti il nostro lavoro è finito.
In caso contrario dobbiamo prima risolverli e poi [pushare](#push) i file aggiornati.
Per trovare facilmente i conflitti cercare globalmente nel progetto `<<<` tramite la lente di ingrandimento in alto a sinistra su VSCode.

### Sincronizzazione a master

```
# eseguo push dei miei ultimi aggiornamenti
git add -A
git commit -m "Messaggio"
git push origin nomeBranch

# passo a branch master
git checkout master

# scarico ultimi aggiornamenti di master
git pull origin master

# torno sulla mia brach
git checkout nomeBranch

# eseguo il merge del codice proveniente da master
git merge master

# aggiorno la mia branch online
git push origin nomeBranch
```

## API
### Login
**Endpoint**
```
https://tree-rn-server.herokuapp.com/authentication/login-action
```
**Parametri**
```
{
  username_email: string,
  password: string
}
```
### Signup
**Endpoint**
```
https://tree-rn-server.herokuapp.com/authentication/signup-action
```
**Parametri**
```
{
  name: string,
  surname: string,
  email: string,
  password: string,
  password_confirmation: string,
  username: string
}
```
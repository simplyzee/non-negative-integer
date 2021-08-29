FROM mhart/alpine-node:16 as builder

WORKDIR /app
COPY package.json package-lock.json ./

FROM mhart/alpine-node:slim-16

WORKDIR /app
COPY --from=builder /app .
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]

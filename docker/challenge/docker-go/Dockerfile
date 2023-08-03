FROM golang:latest AS build

WORKDIR /app

COPY ./main.go .

RUN go mod init github.com/willianganzert/fullcycle

RUN go get -d -v

RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-w -s' -o main .

FROM scratch

WORKDIR /root/

COPY --from=build /app/main .

CMD ["./main"]


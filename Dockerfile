FROM httpd:2.4-alpine
MAINTAINER Christoph Kappestein <christoph.kappestein@apioo.de>
LABEL description="PSX website"
COPY ./build /usr/local/apache2/htdocs/

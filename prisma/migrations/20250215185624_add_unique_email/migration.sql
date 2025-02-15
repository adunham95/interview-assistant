/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `NewsletterContacts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "NewsletterContacts_email_key" ON "NewsletterContacts"("email");

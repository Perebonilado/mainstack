import React, { FC, PropsWithChildren } from "react";
import Container from "../@shared/Container";
import Navbar from "../@shared/Navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <section className="flex h-screen overflow-hidden">
        <Navbar />
        <main className="h-screen w-full max-w-screen-lg mx-auto max-lg:w-full overflow-auto pt-40 no-scrollbar">
          {children}
        </main>
      </section>
    </Container>
  );
};

export default AppLayout;

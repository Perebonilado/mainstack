import React, { FC, PropsWithChildren } from "react";
import Container from "../@shared/Container";
import Navbar from "../@shared/Navbar";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <section className="flex h-screen overflow-hidden">
        <Navbar />
        <aside className="w-full max-w-[60px] h-full pt-40"></aside>
        <main className="h-screen w-[calc(100%-60px)] max-lg:w-full overflow-auto pt-40 no-scrollbar">
          {children}
        </main>
      </section>
    </Container>
  );
};

export default AppLayout;

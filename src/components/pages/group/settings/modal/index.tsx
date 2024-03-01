import {
  CloseButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

ConfirmModal.Header = Header;
ConfirmModal.Body = Body;
ConfirmModal.Footer = Footer;

export function ConfirmModal({
  isOpen = false,
  onClose,
  children,
}: {
  isOpen?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose?.();
      }}
    >
      <ModalOverlay />
      <ModalContent>{children}</ModalContent>
    </Modal>
  );
}

function Header({ children }: { children: React.ReactNode }) {
  return (
    <ModalHeader
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      {children}
      <CloseButton />
    </ModalHeader>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <ModalBody
      display="flex"
      justifyItems="flex-end"
      gap="12px"
      alignItems="center"
    >
      {children}
    </ModalBody>
  );
}

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <ModalFooter
      display="flex"
      justifyItems="flex-end"
      gap="12px"
      alignItems="center"
    >
      {children}
    </ModalFooter>
  );
}

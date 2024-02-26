import {
  Button,
  CloseButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';

export function GroupDeleteModal() {
  return (
    <Modal isOpen={false} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>그룹 삭제</Text>
          <CloseButton />
        </ModalHeader>
        <ModalBody>
          <Text>
            그룹을 삭제하시겠습니까?
            <br />
            기존에 받았던 카드는 내 카드에 저장됩니다.
          </Text>
        </ModalBody>
        <ModalFooter
          display="flex"
          justifyItems="flex-end"
          gap="12px"
          alignItems="center"
        >
          <Button variant="tertiary">취소</Button>
          <Button variant="error">삭제</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

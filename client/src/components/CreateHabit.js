import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/core'
import composeRefs from '@seznam/compose-react-refs'
import React, { useRef } from 'react'
import useForm from 'react-hook-form'
import { useMutation } from 'urql'
import { CREATE_HABIT_MUTATION } from '../graphql/index'

export const CreateHabit = () => {
  const { handleSubmit, register } = useForm()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [res, executeMutation] = useMutation(CREATE_HABIT_MUTATION) // eslint-disable-line no-unused-vars

  const initialRef = useRef()
  const finalRef = useRef()

  const onSubmit = (values, e) => {
    const { name, streak } = values
    executeMutation({
      name,
      streak: +streak,
    })
    e.target.reset()
    onClose()
  }

  return (
    <Flex
      width='300px'
      height='300px'
      borderRadius='40px'
      margin='16px'
      padding='16px'
      justify='center'
      flexWrap='wrap'
    >
      <Icon
        name='small-add'
        onClick={onOpen}
        fontSize='300px'
        cursor='pointer'
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Habit</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor='name'>Habit name</FormLabel>
                <Input
                  name='name'
                  ref={composeRefs(initialRef, register)}
                  placeholder='Enter your habit'
                  width='90%'
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel htmlFor='streak'>Streak</FormLabel>
                <Input
                  name='streak'
                  type='number'
                  placeholder='Enter your streak'
                  width='90%'
                  ref={register}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type='submit'
                rounded='md'
                bg='green.500'
                color='white'
                mr={3}
              >
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

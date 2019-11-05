import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
} from '@chakra-ui/core'
import React from 'react'
import { useMutation } from 'urql'
import { DELETE_HABIT_MUTATION } from '../graphql/index'

export const DeleteHabit = ({ id, name }) => {
  const [isOpen, setIsOpen] = React.useState()
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef()

  const [res, executeMutation] = useMutation(DELETE_HABIT_MUTATION) // eslint-disable-line no-unused-vars

  const deleteHabit = () => {
    executeMutation({ id })
    onClose()
  }
  return (
    <>
      <IconButton
        variantColor='red'
        border='1px solid white'
        aria-label='Delete Habit'
        size='md'
        icon='delete'
        cursor='pointer'
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete “{name}” Habit
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor='red' onClick={deleteHabit} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

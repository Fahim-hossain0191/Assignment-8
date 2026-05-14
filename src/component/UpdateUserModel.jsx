"use client";

import { BiUser } from "react-icons/bi";
import {
  Button,
  Input,
  Label,
  Modal,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export function UpdateUserModel({ className }) {

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const image = form.get("image");

    console.log({ name, image });

    await authClient.updateUser({
      name,
      image,
    });
  };

  return (
    <Modal>
      <Button className={className} variant="secondary">
        Edit Profile
      </Button>

      <Modal.Backdrop className="fixed inset-0 z-[9998] bg-black/40">
        <Modal.Container className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
          <Modal.Dialog className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">

            <Modal.CloseTrigger className="p-5"/>

            <Modal.Header className="px-6 pt-6 pb-4 border-b">
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiUser className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>

            <form onSubmit={onSubmit}>
              <Modal.Body className="px-6 py-5 flex flex-col gap-4">

                <div>
                  <Label>Name</Label>
                  <Input name="name" placeholder="Enter your name" />
                </div>

                <div>
                  <Label>Image URL</Label>
                  <Input name="image" placeholder="Image URL" />
                </div>

              </Modal.Body>

              <Modal.Footer className="px-6 py-4 border-t flex justify-end gap-3">

                <Button slot="close" variant="secondary" className="cursor-pointer">
                  Cancel
                </Button>

                <Button type="submit" className="cursor-pointer">
                  Save
                </Button>

              </Modal.Footer>
            </form>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
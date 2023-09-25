'use client';
import React, {useState} from 'react';
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import {PlusIcon} from "@heroicons/react/24/outline";
import FormButtons from "@/components/common/FormButtons";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "../../../../config/firebase";

const Page = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [name,setName] = useState<string>('');

    const ref = collection(db, 'categories');

    const onSave = async () => {
        console.log(name);
        try{
            await addDoc(ref, {
                name: name
            });
            setModalOpen(false);
        }catch (e){
            console.error(e);
        }
    }

    return (
        <div className={'p-5 bg-white min-h-screen'}>
            <div>
                <Button className={'ml-auto'} onClick={()=> setModalOpen(true)} >
                    <PlusIcon className={'w-5 h-5'}/>
                    Add Tag
                </Button>
            </div>
            <Modal open={modalOpen} closeModal={()=> setModalOpen(false)}>
                <div>
                    <Input value={name} onChange={e => setName(e.target.value)} label={'Name'}/>
                    <FormButtons onCancel={()=> setModalOpen(false)} onSave={onSave} />
                </div>
            </Modal>
        </div>
    );
};

export default Page;

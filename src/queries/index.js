import { gql } from '@apollo/client';

export const GetList = gql`
    query GetList {
        daftar_pengunjung {
        id
        jenis_kelamin
        nama
        umur
        }
    }
`

export const GetListByID = gql`
    query GetListByID($id:Int!) {
        daftar_pengunjung(where:{id:{_eq : $id}}) {
        id
        jenis_kelamin
        nama
        umur
        }
    }
`
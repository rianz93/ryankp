export let sidebarAdmin = [
        {
          title: "Beranda",
          icon: "house",
          ref: "/#/",
          class: "",
        },
        {
          title: "Pelaporan Penelitian",
        },
        {
          title: "Tambah Pelaporan",
          icon: "journal-plus",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "Peneliti Asing",
              ref: "/#/penelitian-tambah/peneliti-asing",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi Jurnal",
              ref: "/#/penelitian-tambah/publikasi-jurnal",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Pemakalah Forum Ilmiah Seminar/Lokakarya",
            //   ref: "/#/penelitian-tambah/pemakalah-forum",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Hibah ditlitabmas",
              ref: "/#/penelitian-tambah/hibah-ditlitabmas",
              icon: "arrow-bar-right",
            },
            {
              title: "Hibah nonditlitabmas",
              ref: "/#/penelitian-tambah/hibah-nonditlitabmas",
              icon: "arrow-bar-right",
            },
            {
              title: "Penyelenggaraan Forum Ilmiah Seminar/Lokakarya",
              ref: "/#/penelitian-tambah/penyelenggaraan-forum",
              icon: "arrow-bar-right",
            },
            {
              title: "Buku Ajar",
              ref: "/#/penelitian-tambah/bukuAjar",
              icon: "arrow-bar-right",
            },
            {
              title: "Hak Kekayaan Intelektual/HKI",
              ref: "/#/penelitian-tambah/hki",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Kontrak Kerja",
            //   ref: "/#/penelitian-tambah/kontrak-kerja",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Unit Bisnis Hasil Riset",
              ref: "/#/penelitian-tambah/unit-bhr",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Luaran Lainnya",
            //   ref: "/#/penelitian-tambah/luaran-lainnya",
            //   icon: "arrow-bar-right",
            // },
          ],
        },
        {
          title: "Lihat Pelaporan",
          icon: "journals",
          ref: "/#/tambah-jurnal",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "Peneliti Asing",
              ref: "/#/penelitian-lihat/peneliti-asing",
              icon: "arrow-bar-left",
            },
            {
              title: "Publikasi Jurnal",
              ref: "/#/penelitian-lihat/publikasi-jurnal",
              icon: "arrow-bar-left",
            },
            // {
            //   title: "Pemakalah Forum Ilmiah Seminar/Lokakarya",
            //   ref: "/#/penelitian-lihat/pemakalah-forum",
            //   icon: "arrow-bar-left",
            // },
            {
              title: "Hibah ditlitabmas",
              ref: "/#/penelitian-lihat/hibah-ditlitabmas",
              icon: "arrow-bar-left",
            },
            {
              title: "Hibah nonditlitabmas",
              ref: "/#/penelitian-lihat/hibah-nonditlitabmas",
              icon: "arrow-bar-left",
            },
            {
              title: "Penyelenggaraan Forum Ilmiah Seminar/Lokakarya",
              ref: "/#/penelitian-lihat/penyelenggaraan-forum",
              icon: "arrow-bar-left",
            },
            {
              title: "Buku Ajar",
              ref: "/#/penelitian-lihat/buku-ajar",
              icon: "arrow-bar-left",
            },
            {
              title: "Hak Kekayaan Intelektual/HKI",
              ref: "/#/penelitian-lihat/hki",
              icon: "arrow-bar-left",
            },
            // {
            //   title: "Kontrak Kerja",
            //   ref: "/#/penelitian-lihat/kontrak-kerja",
            //   icon: "arrow-bar-left",
            // },
            {
              title: "Unit Bisnis Hasil Riset",
              ref: "/#/penelitian-lihat/unit-bhr",
              icon: "arrow-bar-left",
            },
            // {
            //   title: "Luaran Lainnya",
            //   ref: "/#/penelitian-lihat/luaran-lainnya",
            //   icon: "arrow-bar-left",
            // },
          ],
        },
        {
          title: "Pelaporan PkM",
          icon: "",
        },
        {
          title: "Tambah Pelaporan",
          icon: "journal-plus",
          class: "",
          dropdown: true,
          dropdownList: [
            // {
            //   title: "Pengabdian dana DRPM",
            //   ref: "/#/pkm-tambah/dana-drpm",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Pengabdian dana non-DRPM",
            //   ref: "/#/pkm-tambah/dana-nondrpm",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Unit usaha kampus",
              ref: "/#/pkm-tambah/unit-usaha",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi jurnal",
              ref: "/#/pkm-tambah/publikasi-jurnal",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi media massa",
              ref: "/#/pkm-tambah/publikasi-media-massa",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Pemakalah forum ilmiah",
            //   ref: "/#/pkm-tambah/pemakalah-forum",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Hak Kekayaan Intelektual/HKI",
            //   ref: "/#/pkm-tambah/hki",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Luaran iptek lainnya",
            //   ref: "/#/pkm-tambah/luaran-iptek",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Produk terstandarisasi",
              ref: "/#/pkm-tambah/produk-terstandarisasi",
              icon: "arrow-bar-right",
            },
            {
              title: "Produk tersertifikasi",
              ref: "/#/pkm-tambah/produk-tersertifikasi",
              icon: "arrow-bar-right",
            },
            {
              title: "Mitra berbadan hukum",
              ref: "/#/pkm-tambah/mbh",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Buku",
            //   ref: "/#/pkm-tambah/buku",
            //   icon: "arrow-bar-right",
            // },
          ],
        },
        {
          title: "Lihat Pelaporan",
          icon: "Journals",
          class: "",
          dropdown: true,
          dropdownList: [
            // {
            //   title: "Pengabdian dana DRPM",
            //   ref: "/#/pkm-lihat/dana-drpm",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Pengabdian dana non-DRPM",
            //   ref: "/#/pkm-lihat/dana-nondrpm",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Unit usaha kampus",
              ref: "/#/pkm-lihat/unit-usaha",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi jurnal",
              ref: "/#/pkm-lihat/publikasi-jurnal",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi media massa",
              ref: "/#/pkm-lihat/publikasi-media-massa",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Pemakalah forum ilmiah",
            //   ref: "/#/pkm-lihat/pemakalah-forum",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Hak Kekayaan Intelektual/HKI",
            //   ref: "/#/pkm-lihat/hki",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Luaran iptek lainnya",
            //   ref: "/#/pkm-lihat/luaran-iptek",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Produk terstandarisasi",
              ref: "/#/pkm-lihat/produk-terstandarisasi",
              icon: "arrow-bar-right",
            },
            {
              title: "Produk tersertifikasi",
              ref: "/#/pkm-lihat/produk-tersertifikasi",
              icon: "arrow-bar-right",
            },
            {
              title: "Mitra berbadan hukum",
              ref: "/#/pkm-lihat/mbh",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Buku",
            //   ref: "/#/pkm-lihat/buku",
            //   icon: "arrow-bar-right",
            // },
          ],
        },];
export let sidebarUser = [
        {
          title: "Beranda",
          icon: "house",
          ref: "/#/",
          class: "",
        },
        {
          title: "Pelaporan Penelitian",
        },
        {
          title: "Tambah Pelaporan",
          icon: "journal-plus",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "Publikasi Jurnal",
              ref: "/#/penelitian-tambah/publikasi-jurnal",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Pemakalah Forum Ilmiah Seminar/Lokakarya",
            //   ref: "/#/penelitian-tambah/pemakalah-forum",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Hibah ditlitabmas",
              ref: "/#/penelitian-tambah/hibah-ditlitabmas",
              icon: "arrow-bar-right",
            },
            {
              title: "Hibah nonditlitabmas",
              ref: "/#/penelitian-tambah/hibah-nonditlitabmas",
              icon: "arrow-bar-right",
            },
            {
              title: "Buku Ajar",
              ref: "/#/penelitian-tambah/bukuAjar",
              icon: "arrow-bar-right",
            },
            {
              title: "Hak Kekayaan Intelektual/HKI",
              ref: "/#/penelitian-tambah/hki",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Kontrak Kerja",
            //   ref: "/#/penelitian-tambah/kontrak-kerja",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Luaran Lainnya",
            //   ref: "/#/penelitian-tambah/luaran-lainnya",
            //   icon: "arrow-bar-right",
            // },
          ],
        },
        {
          title: "Lihat Pelaporan",
          icon: "journals",
          ref: "/#/tambah-jurnal",
          class: "",
          dropdown: true,
          dropdownList: [
            {
              title: "Publikasi Jurnal",
              ref: "/#/penelitian-lihat/publikasi-jurnal",
              icon: "arrow-bar-left",
            },
            // {
            //   title: "Pemakalah Forum Ilmiah Seminar/Lokakarya",
            //   ref: "/#/penelitian-lihat/pemakalah-forum",
            //   icon: "arrow-bar-left",
            // },
            {
              title: "Hibah ditlitabmas",
              ref: "/#/penelitian-lihat/hibah-ditlitabmas",
              icon: "arrow-bar-left",
            },
            {
              title: "Hibah nonditlitabmas",
              ref: "/#/penelitian-lihat/hibah-nonditlitabmas",
              icon: "arrow-bar-left",
            },
            {
              title: "Buku Ajar",
              ref: "/#/penelitian-lihat/buku-ajar",
              icon: "arrow-bar-left",
            },
            {
              title: "Hak Kekayaan Intelektual/HKI",
              ref: "/#/penelitian-lihat/hki",
              icon: "arrow-bar-left",
            },
            // {
            //   title: "Kontrak Kerja",
            //   ref: "/#/penelitian-lihat/kontrak-kerja",
            //   icon: "arrow-bar-left",
            // },
            // {
            //   title: "Luaran Lainnya",
            //   ref: "/#/penelitian-lihat/luaran-lainnya",
            //   icon: "arrow-bar-left",
            // },
          ],
        },
        {
          title: "Pelaporan PkM",
          icon: "",
        },
        {
          title: "Tambah Pelaporan",
          icon: "journal-plus",
          class: "",
          dropdown: true,
          dropdownList: [
            // {
            //   title: "Pengabdian dana DRPM",
            //   ref: "/#/pkm-tambah/dana-drpm",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Pengabdian dana non-DRPM",
            //   ref: "/#/pkm-tambah/dana-nondrpm",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Publikasi jurnal",
              ref: "/#/pkm-tambah/publikasi-jurnal",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi media massa",
              ref: "/#/pkm-tambah/publikasi-media-massa",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Pemakalah forum ilmiah",
            //   ref: "/#/pkm-tambah/pemakalah-forum",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Hak Kekayaan Intelektual/HKI",
            //   ref: "/#/pkm-tambah/hki",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Luaran iptek lainnya",
            //   ref: "/#/pkm-tambah/luaran-iptek",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Buku",
            //   ref: "/#/pkm-tambah/buku",
            //   icon: "arrow-bar-right",
            // },
          ],
        },
        {
          title: "Lihat Pelaporan",
          icon: "Journals",
          class: "",
          dropdown: true,
          dropdownList: [
            // {
            //   title: "Pengabdian dana DRPM",
            //   ref: "/#/pkm-lihat/dana-drpm",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Pengabdian dana non-DRPM",
            //   ref: "/#/pkm-lihat/dana-nondrpm",
            //   icon: "arrow-bar-right",
            // },
            {
              title: "Publikasi jurnal",
              ref: "/#/pkm-lihat/publikasi-jurnal",
              icon: "arrow-bar-right",
            },
            {
              title: "Publikasi media massa",
              ref: "/#/pkm-lihat/publikasi-media-massa",
              icon: "arrow-bar-right",
            },
            // {
            //   title: "Pemakalah forum ilmiah",
            //   ref: "/#/pkm-lihat/pemakalah-forum",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Hak Kekayaan Intelektual/HKI",
            //   ref: "/#/pkm-lihat/hki",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Luaran iptek lainnya",
            //   ref: "/#/pkm-lihat/luaran-iptek",
            //   icon: "arrow-bar-right",
            // },
            // {
            //   title: "Buku",
            //   ref: "/#/pkm-lihat/buku",
            //   icon: "arrow-bar-right",
            // },
          ],
        },];
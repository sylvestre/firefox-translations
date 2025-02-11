/* eslint-disable no-unused-vars */
/* eslint-disable max-lines */

const modelRegistryVersion = "0.2.15";
let modelRegistryRootURL = `https://storage.googleapis.com/bergamot-models-sandbox/${modelRegistryVersion}`;
const modelRegistryRootURLTest = "https://example.com/browser/browser/extensions/translations/test/browser";

const modelRegistry = {
  "bgen": {
    "model": {
      "name": "model.bgen.intgemm.alphas.bin",
      "size": 17140899,
      "estimatedCompressedSize": 13167979,
      "expectedSha256Hash": "71900847a98cf66bd1d05eaafc23a794c8c1285fb3f0e2ecd2849e6f81c79d53",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.bgen.s2t.bin",
      "size": 6182512,
      "estimatedCompressedSize": 3272580,
      "expectedSha256Hash": "71e8d040a2f63705bec232cd186f32e9f9a78e7968216516c4535589f6a828f9",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.bgen.spm",
      "size": 920621,
      "estimatedCompressedSize": 435213,
      "expectedSha256Hash": "24ce87ba39216714f222ca6a105f30b1863a7ef8b58c9fafdc7a66184e9813a5",
      "modelType": "prod"
    }
  },
  "csen": {
    "model": {
      "name": "model.csen.intgemm.alphas.bin",
      "size": 17140756,
      "estimatedCompressedSize": 13045032,
      "expectedSha256Hash": "5b16661e2864dc50b2f4091a16bdd4ec8d8283e04271e602159ba348df5d6e2d",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.csen.s2t.bin",
      "size": 4535788,
      "estimatedCompressedSize": 2418488,
      "expectedSha256Hash": "8228a3c3f7887759a62b7d7c674a7bef9b70161913f9b0939ab58f71186835c2",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.csen.spm",
      "size": 769763,
      "estimatedCompressedSize": 366392,
      "expectedSha256Hash": "f71cc5d045e479607078e079884f44032f5a0b82547fb96eefa29cd1eb47c6f3",
      "modelType": "prod"
    }
  },
  "deen": {
    "model": {
      "name": "model.deen.intgemm.alphas.bin",
      "size": 17140837,
      "estimatedCompressedSize": 12995752,
      "expectedSha256Hash": "1980225d00dc5645491777accff5b3c9d20b92eff67a25135f1cf8fe2ed8fb8f",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.deen.s2t.bin",
      "size": 5047568,
      "estimatedCompressedSize": 2657472,
      "expectedSha256Hash": "2f7c0f7bbce97ae5b52454074a892ba7b7610fb98e3c5d341e4ca79f0850c4de",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.deen.spm",
      "size": 784269,
      "estimatedCompressedSize": 410738,
      "expectedSha256Hash": "417668f2ed297970febafb5b079a9d5ebc4ed0b3550ac8386d67a90473a09bd7",
      "modelType": "prod"
    }
  },
  "enbg": {
    "model": {
      "name": "model.enbg.intgemm.alphas.bin",
      "size": 17140899,
      "estimatedCompressedSize": 13311038,
      "expectedSha256Hash": "02715a7a81a610a37439d4f788a6f3efcc1ecb39618bc4184442a39378907dfe",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.enbg.s2t.bin",
      "size": 5607608,
      "estimatedCompressedSize": 2950444,
      "expectedSha256Hash": "0f9b794b6f8a9c4b5b781fde49391852b398184b730f89a09428cf562e8bede6",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.bgen.spm",
      "size": 919745,
      "estimatedCompressedSize": 435044,
      "expectedSha256Hash": "b14e44beb653db924c826e1696bcfab23ca9fd3e479baf8bea67d0be77432192",
      "modelType": "prod"
    }
  },
  "encs": {
    "model": {
      "name": "model.encs.intgemm.alphas.bin",
      "size": 17140756,
      "estimatedCompressedSize": 12630325,
      "expectedSha256Hash": "9a2fe0588bd972accfc801e2f31c945de0557804a91666ae5ab43b94fb74ac4b",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.encs.s2t.bin",
      "size": 3556124,
      "estimatedCompressedSize": 1913246,
      "expectedSha256Hash": "e19c77231bf977988e31ff8db15fe79966b5170564bd3e10613f239e7f461d97",
      "modelType": "prod"
    },
    "qualityModel": {
      "name": "qualityModel.encs.bin",
      "size": 68,
      "estimatedCompressedSize": 108,
      "expectedSha256Hash": "d7eba90036a065e4a1e93e889befe09f93a7d9a3417f3edffdb09a0db88fe83a",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.csen.spm",
      "size": 769763,
      "estimatedCompressedSize": 366392,
      "expectedSha256Hash": "f71cc5d045e479607078e079884f44032f5a0b82547fb96eefa29cd1eb47c6f3",
      "modelType": "prod"
    }
  },
  "ende": {
    "model": {
      "name": "model.ende.intgemm.alphas.bin",
      "size": 17140835,
      "estimatedCompressedSize": 12768493,
      "expectedSha256Hash": "b3e980d6602ab0bdfe8d9315cb5fc282a16bb1c8dccf38e70945c584551c4318",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.ende.s2t.bin",
      "size": 3943644,
      "estimatedCompressedSize": 2113181,
      "expectedSha256Hash": "f03eb8245042feb7a5800815b8d0dc215d7a60691632405b65c461d250cedbe6",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.deen.spm",
      "size": 784269,
      "estimatedCompressedSize": 410171,
      "expectedSha256Hash": "417668f2ed297970febafb5b079a9d5ebc4ed0b3550ac8386d67a90473a09bd7",
      "modelType": "prod"
    }
  },
  "enes": {
    "model": {
      "name": "model.enes.intgemm.alphas.bin",
      "size": 17140755,
      "estimatedCompressedSize": 12602853,
      "expectedSha256Hash": "fa7460037a3163e03fe1d23602f964bff2331da6ee813637e092ddf37156ef53",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.enes.s2t.bin",
      "size": 3347104,
      "estimatedCompressedSize": 1720700,
      "expectedSha256Hash": "3a113d713dec3cf1d12bba5b138ae616e28bba4bbc7fe7fd39ba145e26b86d7f",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.esen.spm",
      "size": 825463,
      "estimatedCompressedSize": 414566,
      "expectedSha256Hash": "909b1eea1face0d7f90a474fe29a8c0fef8d104b6e41e65616f864c964ba8845",
      "modelType": "prod"
    },
    "qualityModel": {
      "name": "qualityModel.enes.bin",
      "size": 68,
      "estimatedCompressedSize": 108,
      "expectedSha256Hash": "ce141f8e9e50a5ef4d8e3243a274b1734dc532f6963794a8869dce35acb543c2",
      "modelType": "prod"
    }
  },
  "enet": {
    "model": {
      "name": "model.enet.intgemm.alphas.bin",
      "size": 17140754,
      "estimatedCompressedSize": 12543318,
      "expectedSha256Hash": "a28874a8b702a519a14dc71bcee726a5cb4b539eeaada2d06492f751469a1fd6",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.enet.s2t.bin",
      "size": 2700780,
      "estimatedCompressedSize": 1336443,
      "expectedSha256Hash": "3d1b40ff43ebef82cf98d416a88a1ea19eb325a85785eef102f59878a63a829d",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.eten.spm",
      "size": 828426,
      "estimatedCompressedSize": 416995,
      "expectedSha256Hash": "e3b66bc141f6123cd40746e2fb9b8ee4f89cbf324ab27d6bbf3782e52f15fa2d",
      "modelType": "prod"
    },
    "qualityModel": {
      "name": "qualityModel.enet.bin",
      "size": 68,
      "estimatedCompressedSize": 108,
      "expectedSha256Hash": "bb9b9c449c705297fe6b83542d64406201960971f102787b9b6c733416406707",
      "modelType": "prod"
    }
  },
  "esen": {
    "model": {
      "name": "model.esen.intgemm.alphas.bin",
      "size": 17140755,
      "estimatedCompressedSize": 13215960,
      "expectedSha256Hash": "4b6b7f451094aaa447d012658af158ffc708fc8842dde2f871a58404f5457fe0",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.esen.s2t.bin",
      "size": 3860888,
      "estimatedCompressedSize": 1978538,
      "expectedSha256Hash": "f11a2c23ef85ab1fee1c412b908d69bc20d66fd59faa8f7da5a5f0347eddf969",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.esen.spm",
      "size": 825463,
      "estimatedCompressedSize": 414566,
      "expectedSha256Hash": "909b1eea1face0d7f90a474fe29a8c0fef8d104b6e41e65616f864c964ba8845",
      "modelType": "prod"
    }
  },
  "eten": {
    "model": {
      "name": "model.eten.intgemm.alphas.bin",
      "size": 17140754,
      "estimatedCompressedSize": 12222624,
      "expectedSha256Hash": "aac98a2371e216ee2d4843cbe896c617f6687501e17225ac83482eba52fd0028",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.eten.s2t.bin",
      "size": 3974944,
      "estimatedCompressedSize": 1920655,
      "expectedSha256Hash": "6992bedc590e60e610a28129c80746fe5f33144a4520e2c5508d87db14ca54f8",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.eten.spm",
      "size": 828426,
      "estimatedCompressedSize": 416995,
      "expectedSha256Hash": "e3b66bc141f6123cd40746e2fb9b8ee4f89cbf324ab27d6bbf3782e52f15fa2d",
      "modelType": "prod"
    }
  },
  "iten": {
    "model": {
      "name": "model.iten.intgemm.alphas.bin",
      "size": 17140899,
      "estimatedCompressedSize": 13220889,
      "expectedSha256Hash": "7dfdf189146d9353fdea264b9e4c8ac36441c770dc4353a8380b64e589dc035b",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.iten.s2t.bin",
      "size": 4977500,
      "estimatedCompressedSize": 2743096,
      "expectedSha256Hash": "e30ec549bd0da9ac42cccdcd3806d3be84d485f7fd329f90f6e40ee027e841d9",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.iten.spm",
      "size": 812781,
      "estimatedCompressedSize": 408834,
      "expectedSha256Hash": "603f3349657c3deb9736a0c567452d102a5a03c377dfdf1d32c428608f2cff1b",
      "modelType": "prod"
    }
  },
  "nben": {
    "model": {
      "name": "model.nben.intgemm.alphas.bin",
      "size": 12980780,
      "estimatedCompressedSize": 10284054,
      "expectedSha256Hash": "03cef6aa909d2397420201551354c21010324fe155753d62b4eb190adca071be",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.nben.s2t.bin",
      "size": 1487760,
      "estimatedCompressedSize": 721631,
      "expectedSha256Hash": "5ec9a1eb849cf8fde0908904808e65a0c5a3027f85b1b5b9944c6b15d424598d",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.nben.spm",
      "size": 511372,
      "estimatedCompressedSize": 269244,
      "expectedSha256Hash": "3cb4f4efc382d6e7242304e8649050da297469b69a604dd7480d8704fe4877b6",
      "modelType": "prod"
    }
  },
  "pten": {
    "model": {
      "name": "model.pten.intgemm.alphas.bin",
      "size": 17140899,
      "estimatedCompressedSize": 13204180,
      "expectedSha256Hash": "b4a1fd101f59ca258bfb051a3a4e5762497b9f91d7e74f28b7a2d68dc075f8fa",
      "modelType": "prod"
    },
    "lex": {
      "name": "lex.50.50.pten.s2t.bin",
      "size": 4801740,
      "estimatedCompressedSize": 2639080,
      "expectedSha256Hash": "702d9b09fbc020168998bb81afc927e74262f5a1455e9b443608a5d8efa4b52d",
      "modelType": "prod"
    },
    "vocab": {
      "name": "vocab.pten.spm",
      "size": 817234,
      "estimatedCompressedSize": 410584,
      "expectedSha256Hash": "2326a27577b5ffa0b822c55fe850986961728097521de35fcc186f7d6dce72d4",
      "modelType": "prod"
    }
  },
  "enfa": {
    "model": {
      "name": "model.enfa.intgemm.alphas.bin",
      "size": 17140835,
      "estimatedCompressedSize": 13376428,
      "expectedSha256Hash": "74fa9694e56c9e0511229c6d247752132b4cf83bbf0574a601dceeac5b62f1b9",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.enfa.s2t.bin",
      "size": 5097656,
      "estimatedCompressedSize": 2623030,
      "expectedSha256Hash": "09db90a01fc53764db021c58f4935a60b693b90835039b5a27b7bb9f4709e3b7",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.enfa.spm",
      "size": 794181,
      "estimatedCompressedSize": 372636,
      "expectedSha256Hash": "ecf95b5cf04b86bf68113b3d6fdcf23c2728eb5929cebc0f5aa5c4d8b8330fa4",
      "modelType": "dev"
    }
  },
  "enit": {
    "model": {
      "name": "model.enit.intgemm.alphas.bin",
      "size": 17140836,
      "estimatedCompressedSize": 13283223,
      "expectedSha256Hash": "a5ce3723f62ead92a0e0373b6df0ad8e3e6d22963adb1333984206e33b8b6c61",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.enit.s2t.bin",
      "size": 4489920,
      "estimatedCompressedSize": 2409986,
      "expectedSha256Hash": "bb1fad3b3f6a13ebce1698cf7f39ca736c4dea4525f3dab5e1a78436f07445e6",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.enit.spm",
      "size": 814128,
      "estimatedCompressedSize": 405338,
      "expectedSha256Hash": "de8cbeb79e0139304bfa47e8559f2447016bf9906225a97d3df1baed4de8f3a3",
      "modelType": "dev"
    }
  },
  "enpt": {
    "model": {
      "name": "model.enpt.intgemm.alphas.bin",
      "size": 17140836,
      "estimatedCompressedSize": 13429592,
      "expectedSha256Hash": "d968735704c75e33c2e183b9241f14c0b2a560d01d88a2728e5c0119a4d7fb22",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.enpt.s2t.bin",
      "size": 4472528,
      "estimatedCompressedSize": 2411984,
      "expectedSha256Hash": "1e96599123d275afa37353dfe84677a4070f013494fbdc9c52a28445cc9bc38d",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.enpt.spm",
      "size": 812781,
      "estimatedCompressedSize": 406524,
      "expectedSha256Hash": "633a3d782c79f7d5e4b94ab96848f47c2fdf8ba82dd99efd1742b8a696bbd0cc",
      "modelType": "dev"
    }
  },
  "enru": {
    "model": {
      "name": "model.enru.intgemm.alphas.bin",
      "size": 17140836,
      "estimatedCompressedSize": 12853987,
      "expectedSha256Hash": "4a45186a93b8a2dd9301c66a3b3dad580b1bcfa74aadda583ca383f9fe0dea93",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.enru.s2t.bin",
      "size": 3049096,
      "estimatedCompressedSize": 1579779,
      "expectedSha256Hash": "7bd3e2c0a72286fe1f3da65c56c49a7cd77efa5f1d1a444e2a9e769480b96ff3",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.enru.spm",
      "size": 937157,
      "estimatedCompressedSize": 435776,
      "expectedSha256Hash": "feca2d44f01b946c85faba3b15b5eb53344bec84cd14a1a4d4a82ddd774c5edd",
      "modelType": "dev"
    }
  },
  "faen": {
    "model": {
      "name": "model.faen.intgemm.alphas.bin",
      "size": 17140837,
      "estimatedCompressedSize": 13077214,
      "expectedSha256Hash": "f7a76cde1d66aa7d9ed017d7dd0f7e945608412e723e0d99dee293a6adae4572",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.faen.s2t.bin",
      "size": 6197320,
      "estimatedCompressedSize": 3230408,
      "expectedSha256Hash": "55fac2186b0c8c903d4ed958457f363b3a339a96b8ab7f73b62c7b7c9ac09b48",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.faen.spm",
      "size": 845020,
      "estimatedCompressedSize": 421102,
      "expectedSha256Hash": "c3a675794dcba12dde8e1a343a82d973b7c9584f9dce3dad37f99dfe64fd29de",
      "modelType": "dev"
    }
  },
  "isen": {
    "model": {
      "name": "model.isen.intgemm.alphas.bin",
      "size": 17140780,
      "estimatedCompressedSize": 13989880,
      "expectedSha256Hash": "29ff1cc6072372ee41f91d38dbf1cdfa4efb1a89a0c0c4200a443ee929e091b7",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.isen.s2t.bin",
      "size": 2926468,
      "estimatedCompressedSize": 1502107,
      "expectedSha256Hash": "790a9dd90e07b105437df60d79cb30fcb34fdce918b4aa5e94992953bcc42520",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.isen.spm",
      "size": 820367,
      "estimatedCompressedSize": 416849,
      "expectedSha256Hash": "67020a6ce013f06a1fca8b1f4c1a65c4fb8c679b231a236e7c6988570cbc8e06",
      "modelType": "dev"
    }
  },
  "nnen": {
    "model": {
      "name": "model.nnen.intgemm.alphas.bin",
      "size": 12980780,
      "estimatedCompressedSize": 10465158,
      "expectedSha256Hash": "17550943381bdfae30b1d8ee29b33b2da2c9ae4d4b9749e2e66b2946e27dce7d",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.nnen.s2t.bin",
      "size": 1506236,
      "estimatedCompressedSize": 731899,
      "expectedSha256Hash": "b19abe7154430c1ee321e29391b14b2752c3350c3fbfcd1caf1ef7a0f9a30a97",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.nnen.spm",
      "size": 510942,
      "estimatedCompressedSize": 269397,
      "expectedSha256Hash": "14625622062046b7c44eb79652efb113518bf4b52fa1b98a949934b7a94b0273",
      "modelType": "dev"
    }
  },
  "ruen": {
    "model": {
      "name": "model.ruen.intgemm.alphas.bin",
      "size": 17140836,
      "estimatedCompressedSize": 13108893,
      "expectedSha256Hash": "3b6a0305e3d232fadd54f5a765365b7b96ad6d8f2e818cba594b02fbd8fadb3d",
      "modelType": "dev"
    },
    "lex": {
      "name": "lex.50.50.ruen.s2t.bin",
      "size": 5090836,
      "estimatedCompressedSize": 2684919,
      "expectedSha256Hash": "e6667e22f5f86be4872e3768b7184727f5dd8c9f2ccfb0639baabcb1176f5d11",
      "modelType": "dev"
    },
    "vocab": {
      "name": "vocab.ruen.spm",
      "size": 936576,
      "estimatedCompressedSize": 435801,
      "expectedSha256Hash": "aaf9a325c0a988c507d0312cb6ba1a02bac7a370bcd879aedee626a40bfbda78",
      "modelType": "dev"
    }
  }
}
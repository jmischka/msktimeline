const entries = [
	{date: 1882, image: '1882-Mastectomy.jpg', title: 'The first radical mastectomy', content: 'William Halsted performs the first radical mastectomy as a way to treat breast cancer. He removes the patient’s entire breast, surrounding lymphatic tissue, and pectoralis muscle. The "Halsted mastectomy" remains the standard treatment for breast cancer for almost a century. By the 1970s, clinical trials show that less extensive surgery plus radiation is equally effective for treating most breast cancers.', credit:'Wellcome Collection. CC BY'},
	{date: 1884, image: '1884-MSK.jpg', title: 'Memorial Sloan Kettering Cancer Center opens', content: 'Memorial Sloan Kettering Cancer Center opens under the name of the New York Cancer Hospital at the corner of 106th Street and Central Park West in Manhattan. The hospital is the first institution in the U.S. devoted exclusively to treating cancer and counts financier John Jacob Astor III and his wife Charlotte among its founders.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1891, image: '1893-Coley.jpg', title: 'Immunotherapy is first used to treat cancer', content: 'William Coley, a surgeon at Memorial Sloan Kettering, pioneers the first nonsurgical treatment of cancer through an early form of immunotherapy. He treats sarcoma with the toxins of a bacterial skin infection to rally the body’s natural defenses against cancer.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1895, image: '1896-XRay.jpg', title: 'The discovery of X-rays', content: 'German physicist Wilhelm Roentgen discovers X-rays while experimenting with electricity in his laboratory. Soon after, he takes a radiograph of his wife’s left hand, as pictured. In 1902, Memorial Sloan Kettering pioneers the use of X-rays in cancer therapy by acquiring two X-ray machines.', credit: 'Granger/Shutterstock'},
	{date: 1898, image: '1898-Curie.jpg', title: 'The discovery of radium', content: 'The husband-and-wife team of Pierre Curie, a French chemist, and Marie Curie, a Polish physicist, discover radium. The finding sparks a new era of scientific inquiry into the structure of an atom, and it eventually leads to a better understanding of how radiation can both cause—and treat—cancer.', credit: 'Ullstein Bild/Getty'},
	{date: 1913, image: '1913-mammograph.jpg', title: 'The foundation of mammography is laid', content: 'German surgeon Albert Salomon visualizes breast tumors using X-rays. Though the work forms the basis of mammography, the first mammography screening doesn’t appear until the late 1950s and screenings don’t become popular until after 1966, when radiologist Philip Strax demonstrates their effectiveness at reducing breast cancer deaths by detecting cancers early through the first large-scale randomized controlled trial.', credit: 'Siemens Healthineers'},
	{date: 1914, image: '1914-Ewing.jpg', title: 'First Head and Neck Cancer Service opens', content: 'Pathologist James Ewing, pictured, helps open the world’s first Head and Neck Cancer Service at Memorial Sloan Kettering. Ewing discovers a malignant bone tumor, a type of sarcoma, which later becomes known as Ewing sarcoma.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1918, image: '1918-Radium.jpg', title: 'External beam radiation developed', content: 'Physicist Gioacchino Failla, who works at Memorial Sloan Kettering, develops the first external-beam radium therapy device, known as a “radium element pack.” The device is used to treat cancers located in the chest, brain, and abdomen. External beam radiation has since evolved into an important treatment approach for countless people with cancer.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1928, image: '1928-Pap.jpg', title: 'George Papanicolaou develops his namesake ‘Pap smear’', content: 'Greek cytopathologist George Papanicolaou, pictured in front of a slide of cancer cells, discovers that cervical cancer can be detected by examining cells from the cervix under a microscope. This leads to the invention of the Pap smear, in which abnormal cervical cells can be detected before they become cancerous. The test revolutionizes the early detection of cervical cancer.', credit: 'Walter Sanders/The LIFE Picture Collection/Getty'},
	{date: 1937, image: '1937-Roosevelt.jpg', title: 'The first National Cancer Act is signed', content: 'President Franklin D. Roosevelt signs the National Cancer Act of 1937 to provide support for cancer research. It establishes the National Cancer Institute (NCI) as the federal government’s primary agency to address research and training needs for the cause, diagnosis, and treatment of cancer.', credit: 'National Cancer Institute (NCI)'},
	{date: 1941, image: '1941-Huggins.jpg', title: 'The birth of hormonal therapy', content: 'Charles Huggins discovers that administering estrogens or removing the testicles to lower testosterone production causes prostate tumors to regress. Such hormonal manipulation—more commonly known as hormonal therapy—continues to be a mainstay of prostate cancer treatment.', credit: 'Courtesy of the U.S. National Library of Medicine'},
	{date: 1946, image: '1946-Dusty.jpg', title: 'The era of chemotherapy begins', content: 'Teams of investigators, including those from Memorial Sloan Kettering, report that the nitrogen mustards developed as chemical warfare agents can be used effectively against certain forms of cancer. Nitrogen mustard belongs to a class of drugs that kill cells by chemically modifying their DNA. In 1949, the FDA approves nitrogen mustard (mechlorethamine) for the treatment of cancer, paving the way for cancer chemotherapy.', credit: 'Ike Vern'},
	{date: 1956, image: '1956-Bone.jpg', title: 'The first bone marrow transplant is performed', content: 'The first bone marrow transplant between identical twins is performed by E. Donnall Thomas. The patient, who has leukemia, is given radiotherapy and receives healthy bone marrow from an identical twin. In 1968, physician-scientist Robert Good performs the first successful bone marrow transplant from a genetically matched sibling, permanently curing a boy who was born with severe combined immunodeficiency.', credit: 'Dr Rob Stepney/Science Photo Library'},
	{date: 1957, image: '1957-Charlotte.jpg', title: 'Link between viruses and cancer emerges', content: 'Charlotte Friend, a virologist at the Sloan Kettering Institute, discovers a virus that causes leukemia in mice. Her work lends support to the controversial idea that viruses can cause some forms of cancer.', credit: 'Walter Daran/Time, Inc.'},
	{date: 1958, image: '1958-Emil.jpg', title: 'First cancer cures obtained with combination chemotherapy', content: 'Emil Frei III pioneers the use of combination chemotherapy. He leads a study that demonstrates treatment with multiple chemotherapy agents could produce lasting remissions, and sometimes cures, in children with acute lymphoblastic leukemia — a disease that was uniformly fatal at the time. Combination chemotherapy is now a standard approach for treating many adult and pediatric cancers.', credit: 'Allan Grant/The LIFE Picture Collection/Getty'},
	{date: 1959, image: '1959-Immunology.jpg', title: 'The dawn of modern tumor immunology', content: 'Memorial Sloan Kettering immunologist Lloyd J. Old, pictured, discovers that certain bacterial products could boost an animal’s immunity to cancer. Mice injected with a weakened version of a bacterium called Bacillus Calmette-Guerin (BCG) are resistant to the growth of implanted tumors. This discovery marks the beginning of modern tumor immunology.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1960, image: '1960-Phili.jpg', title: 'Philadelphia chromosome discovered', content: 'Philadelphia-based researchers David Hungerford and Peter Nowell discover an abnormal chromosome in the cells of chronic myeloid leukemia. They dub it the "Philadelphia chromosome." Scientists now know that the Philadelphia chromosome results from the swapping of genetic material from two different chromosomes. The move creates a fusion gene called BCR-ABL, which promotes cancer. These discoveries inspire the search for targeted therapies to combat this abnormality, and eventually lead to the drug imatinib (Gleevec®).', credit: 'Courtesy of the Perelman School of Medicine, University of Pennsylvania.'},
	{date: 1964, image: '1964-Yew.jpg', title: 'The discovery of antitumor agent paclitaxel', content: 'Monroe E. Wall and Mansukh Wani discover that extracts from the bark of the Pacific yew tree are toxic to living cells. Wall and colleagues isolate the most cytotoxic compound from the tree’s bark (pictured) and call it paclitaxel. In 1979, Susan Band Horwitz discovers that it kills cancer cells by stopping cell division. Paclitaxel (Taxol®) is currently used to treat ovarian, breast, and lung cancer, and Kaposi\'s sarcoma.', credit: 'Alan Sirulnikoff/Science Photo Library'},
	{date: 1969, image: '1969-MSK.jpg', title: 'The world’s first pediatric day hospital opens', content: 'The world’s first pediatric day hospital opens at Memorial Sloan Kettering. It cares for children and young adults with cancer on an outpatient basis, allowing them to return home on the day of treatment.', credit: 'Jerry Abramowitz/Hearst Corp.'},
	{date: 1971, image: '1971-CancerAct.jpg', title: 'Nixon signs the second National Cancer Act', content: 'Seated at the Resolute Desk, President Richard Nixon signs the National Cancer Act of 1971, announcing a “war on cancer.” Public interest in cancer therapeutics surges, along with an outpouring of funds towards cancer treatment.', credit: 'AP/Shutterstock'},
	{date: 1973, image: '1973-BoneMarrow.jpg', title: 'First bone marrow transplant from an unrelated donor is performed', content: 'Memorial Sloan Kettering pediatric oncologist Richard O’Reilly performs the first successful bone marrow transplant from an unrelated donor to a patient. The procedure opens the possibility of a transplant to patients without a sibling who can provide a bone marrow match—the large majority of cases.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1977, image: '1977-Psychiatric.jpg', title: 'The world’s first psycho-oncology center opens', content: 'Memorial Sloan Kettering becomes the world’s first cancer center to establish a full-time psychiatry service devoted solely to treating psychiaric and psychological problems unique to cancer patients. Dr. Jimmie Holland, pictured, who pioneered the development of psychiatry in the oncology setting, is appointed the chief of the service.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1979, image: '1979-p53.jpg', title: 'The tumor-suppressor gene, <span style="font-style: italic;">p53</span>, is discovered', content: 'The <span style="font-style: italic;">p53</span> gene, which is the most commonly mutated gene in human cancer, is discovered. It is a tumor-suppressor gene, which means its protein product, <span style="font-style: italic;">p53,</span> helps control cell proliferation and suppress tumor growth.', credit: 'Philippe Plailly/Science Photo Library'},
	{date: 1981, image: '1981-Hepatitis.jpg', title: 'First cancer vaccine is approved', content: 'The FDA approves the hepatitis B vaccine, which was developed by Maurice Hillman at Merck, based on insights from Baruch Blumberg, who discovered the hepatitis B virus. This is considered the first cancer vaccine because it prevents chronic hepatitis B infections, a principal cause of liver cancer.', credit: 'Saturn Stills/Science Photo Library'},
	{date: 1982, image: '1982-Pain.jpg', title: 'Nation’s first pain service is established', content: 'Kathleen Foley helps establish the nation’s first Pain Service at Memorial Sloan Kettering. The service is dedicated to developing more effective treatments for patients with pain that is acute, chronic, or difficult to manage.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1984, image: '1984-MSK.jpg', title: 'Filgrastim dawns as a powerful cancer drug', content: 'Memorial Sloan Kettering physician-scientists Malcolm Moore and Karl Welte isolate a protein from human cells that stimulates new blood growth. Called G-CSF, this molecule forms the basis of filgrastim (Neupogen®), which has been shown to reduce the frequency and severity of infections in cancer patients and to help them recover faster after chemotherapy. It becomes one of the most important cancer drugs ever developed.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1984, image: '1984-HER.jpg', title: 'The oncogene <span style="font-style: italic;">HER2</span> emerges as a target for breast cancer therapies', content: 'Researchers discover a new oncogene in rat cells called “neu.” The human version of this gene, <span style="font-style: italic;">HER2</span>, is overexpressed in about 20% to 25% of breast cancers and is associated with more-aggressive disease. This breakthrough leads to the FDA approval of trastuzumab (Herceptin®) as a targeted therapy to treat HER2-positive breast cancer in the adjuvant and metastatic settings in 1998.', credit: 'Cultura RM Exclusive/Rolf Ritter/Getty'},
	{date: 1990, image: '1990-BCG.jpg', title: 'Revolutionary bladder cancer treatment is developed', content: 'The FDA approves BCG, a bacterial vaccine, for the treatment of bladder cancer, based on results of a clinical trial conducted by Memorial Sloan Kettering urologic surgeon Harry Herr and tumor immunologist Herbert Oettgen (shown). BCG remains a primary treatment for non-muscle invasive bladder cancer.', credit: 'Memorial Sloan Kettering Cancer Center'},
	{date: 1994, image: '1994-BRCA.jpg', title: 'First cancer predisposition gene, <span style="font-style: italic;">BRCA1</span>, is sequenced', content: 'Based on genetic pedigree studies by Mary Claire King, a team from Myriad Genetics clones and sequences the cancer predisposition gene <span style="font-style: italic;">BRCA1.</span> Specific inherited mutations in this gene greatly increase the risks of breast, ovarian, and other cancer types. The following year, the same group sequences the gene <span style="font-style: italic;">BRCA2.</span> These breakthroughs confirm the genetic basis of some cancers.', credit: 'James King-Holmes/Icrf/Science Photo Library/Getty'},
	{date: 1996, image: '1996-Immune.jpg', title: 'The birth of immune checkpoint blockade therapy', content: 'Immunologist James Allison is the first to show that blocking a molecule on immune cells called CTLA-4 could cure cancer in mice. This opens a whole new approach to cancer treatment. The approach, called immune checkpoint blockade therapy, is geared toward “releasing the brakes” on the immune system. The 2018 Nobel Prize in Physiology or Medicine was awarded to Drs. Allison and Tasuku Honjo for their work on developing this approach as a treatment for cancer.', credit: 'Steve Gschmeissner/Science Photo Library'},
	{date: 2001, image: '2001-Imatinib.jpg', title: 'FDA approves imatinib', content: 'The FDA approves imatinib (Gleevec®) for the treatment of chronic myeloid leukemia. The drug, which interferes with the action of a mutant protein called BCR-ABL, is one of the first successful targeted cancer therapies, and it is now used to treat a number of cancer types. Scientists Brian Druker, Nicholas Lydon, and Charles Sawyers shared the 2009 Lasker~DeBakey Award for their work on the drug’s development.', credit: 'Burger/Phanie/Shutterstock'},
	{date: 2002, image: '2002-CarT.jpg', title: 'The beginning of CAR T cell therapy', content: 'Memorial Sloan Kettering (MSK) researchers Michel Sadelain, Renier Brentjens, and Isabelle Rivière develop genetically engineered T cells with a chimeric antigen receptor (CAR), now a powerful way to fight leukemia and other blood cancers. In this approach, T cells are collected from a patient’s blood, genetically engineered to recognize certain proteins on cancer cells, and infused back into the patient’s bloodstream.', credit: 'The Prasad Adusumilli Lab/Memorial Sloan Kettering Cancer Center'},
	{date: 2003, image: '2003-GenomeB.jpg', title: 'The complete human genome is sequenced', content: 'The full sequence of the human genome is completed and published jointly by the Human Genome Project— the international, collaborative research program whose goal was the complete mapping and understanding of all the genes of human beings—and Celera Genomics. The public effort was led by Francis Collins, now the director of the National Institutes of Health, and the private one was led by biochemist and geneticist Craig Venter.', credit: 'Sebastian Kaulitzki/Getty'},
	{date: 2006, image: '2006-HPV.jpg', title: 'FDA approves first HPV vaccine', content: 'In an effort to prevent HPV infection, which causes cervical cancer, the FDA approves the first HPV vaccine, Papillomavirus (9-Valent) Vaccine (Gardasil 9®).', credit: 'Garo/Phanie/Science Photo Library'},
	{date: 2009, image: '2009-Steriotactic.jpg', title: 'Stereotactic radiosurgery technique is developed', content: 'Radiation oncologists at Memorial Sloan Kettering develop a stereotactic radiosurgery technique to allow single-day, high-dose treatment of metastatic brain tumors. Conventional therapies could take up to six weeks. The following year, MSK researchers pioneer the use of stereotactic hypofractionated accelerated radiation therapy to the prostate. This technique delivers ultrahigh doses of radiation in five treatment sessions, compared with nearly 50 sessions over 10 weeks using the conventional approach.', credit: 'Simon Fraser/Science Photo Library'},
	{date: 2010, image: '2010-Sipuleucel.jpg', title: 'The first cancer treatment vaccine is approved', content: 'The FDA approves Sipuleucel-T (Provenge®) as the first therapeutic cancer vaccine for some men with prostate cancer. It harnesses the patient’s own immune system to attack cancer cells.', credit: 'Dendreon'},
	{date: 2011, image: '2011-MSK.jpg', title: 'The FDA approves first immune checkpoint inhibitor', content: 'Following clinical trials led by Memorial Sloan Kettering physician-scientist Jedd Wolchok, the FDA approves the first immune checkpoint inhibitor, ipilimumab (Yervoy®), for the treatment of advanced melanoma. The drug releases a brake on immune cells, allowing them to find and fight cancer. The brake is a protein called CTLA-4.', credit: 'Mario Margado'},
	{date: 2014, image: '2014-PD1.jpg', title: 'Next wave of checkpoint inhibitors arrive', content: 'The FDA approves two new immune therapies for melanoma, pembrolizumab (Keytruda®) and nivolumab (Opdivo®), which target a checkpoint protein called PD-1. In 2015, the FDA approves nivolumab and pembrolizumab for non-small cell lung cancer, and nivolumab for renal cell carcinoma.', credit: 'Steve Gschmeissner/Science Photo Library/Getty'},
	{date: 2017, image: '2017-DNA.jpg', title: 'The DNA-sequencing test MSK-IMPACT™ receives FDA authorization', content: 'The FDA authorizes the tumor DNA-sequencing test MSK-IMPACT™ (integrated mutation profiling of actionable cancer targets). Developed by researchers at Memorial Sloan Kettering (MSK), the test looks for genetic mutations and other alterations in patients’ tumors. Since January 2014, MSK-IMPACT™ has been used at MSK to analyze the tumors of more than 20,000 patients with advanced cancers. The data help guide treatment decisions and open the door to precision medicine approaches.', credit: 'iStock'}
];

export default entries;
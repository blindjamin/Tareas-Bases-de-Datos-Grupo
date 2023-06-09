PGDMP         2                {            tareabd2    15.2    15.2 ?    P           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            Q           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            R           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            S           1262    18105    tareabd2    DATABASE     {   CREATE DATABASE tareabd2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE tareabd2;
                postgres    false            �            1259    18261    Defensas    TABLE     h   CREATE TABLE public."Defensas" (
    id integer NOT NULL,
    defensa character varying(45) NOT NULL
);
    DROP TABLE public."Defensas";
       public         heap    postgres    false            �            1259    18267    Defensas_Reinos    TABLE     l   CREATE TABLE public."Defensas_Reinos" (
    id_defensas integer NOT NULL,
    id_reinos integer NOT NULL
);
 %   DROP TABLE public."Defensas_Reinos";
       public         heap    postgres    false            �            1259    18260    Defensas_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Defensas_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Defensas_id_seq";
       public          postgres    false    226            T           0    0    Defensas_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Defensas_id_seq" OWNED BY public."Defensas".id;
          public          postgres    false    225            �            1259    18272    Diplomacias    TABLE     �   CREATE TABLE public."Diplomacias" (
    id_reino_1 integer NOT NULL,
    id_reino_2 integer NOT NULL,
    es_aliado boolean NOT NULL
);
 !   DROP TABLE public."Diplomacias";
       public         heap    postgres    false            �            1259    18242    Karts    TABLE     �   CREATE TABLE public."Karts" (
    id integer NOT NULL,
    modelo character varying(45) NOT NULL,
    color character varying(45) NOT NULL,
    velocidad_maxima integer,
    id_personaje integer
);
    DROP TABLE public."Karts";
       public         heap    postgres    false            �            1259    18241    Karts_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Karts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Karts_id_seq";
       public          postgres    false    221            U           0    0    Karts_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Karts_id_seq" OWNED BY public."Karts".id;
          public          postgres    false    220            �            1259    18223 
   Personajes    TABLE     �   CREATE TABLE public."Personajes" (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    fuerza integer NOT NULL,
    fecha_nacimiento timestamp(3) without time zone NOT NULL,
    objeto character varying(30)
);
     DROP TABLE public."Personajes";
       public         heap    postgres    false            �            1259    18222    Personajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Personajes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Personajes_id_seq";
       public          postgres    false    216            V           0    0    Personajes_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Personajes_id_seq" OWNED BY public."Personajes".id;
          public          postgres    false    215            �            1259    18254    Reinos    TABLE     �   CREATE TABLE public."Reinos" (
    id integer NOT NULL,
    nombre character varying(45) NOT NULL,
    ubicacion character varying(45) NOT NULL,
    superficie integer NOT NULL
);
    DROP TABLE public."Reinos";
       public         heap    postgres    false            �            1259    18253    Reinos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Reinos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public."Reinos_id_seq";
       public          postgres    false    224            W           0    0    Reinos_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public."Reinos_id_seq" OWNED BY public."Reinos".id;
          public          postgres    false    223            �            1259    18230    Trabajos    TABLE     �   CREATE TABLE public."Trabajos" (
    id integer NOT NULL,
    descripcion character varying(45),
    sueldo integer NOT NULL
);
    DROP TABLE public."Trabajos";
       public         heap    postgres    false            �            1259    18229    Trabajos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Trabajos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public."Trabajos_id_seq";
       public          postgres    false    218            X           0    0    Trabajos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public."Trabajos_id_seq" OWNED BY public."Trabajos".id;
          public          postgres    false    217            �            1259    18213    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    postgres    false            �            1259    18248    personaje_habita_reino    TABLE     �   CREATE TABLE public.personaje_habita_reino (
    id_personaje integer NOT NULL,
    id_reino integer NOT NULL,
    fecha_registro timestamp(3) without time zone NOT NULL,
    es_gobernante boolean NOT NULL
);
 *   DROP TABLE public.personaje_habita_reino;
       public         heap    postgres    false            �            1259    18236    personaje_tiene_trabajo    TABLE     �   CREATE TABLE public.personaje_tiene_trabajo (
    id_trabajo integer NOT NULL,
    id_personaje integer NOT NULL,
    fecha_inicio timestamp(3) without time zone NOT NULL,
    fecha_termino timestamp(3) without time zone
);
 +   DROP TABLE public.personaje_tiene_trabajo;
       public         heap    postgres    false            �           2604    18264    Defensas id    DEFAULT     n   ALTER TABLE ONLY public."Defensas" ALTER COLUMN id SET DEFAULT nextval('public."Defensas_id_seq"'::regclass);
 <   ALTER TABLE public."Defensas" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            �           2604    18245    Karts id    DEFAULT     h   ALTER TABLE ONLY public."Karts" ALTER COLUMN id SET DEFAULT nextval('public."Karts_id_seq"'::regclass);
 9   ALTER TABLE public."Karts" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    18226    Personajes id    DEFAULT     r   ALTER TABLE ONLY public."Personajes" ALTER COLUMN id SET DEFAULT nextval('public."Personajes_id_seq"'::regclass);
 >   ALTER TABLE public."Personajes" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �           2604    18257 	   Reinos id    DEFAULT     j   ALTER TABLE ONLY public."Reinos" ALTER COLUMN id SET DEFAULT nextval('public."Reinos_id_seq"'::regclass);
 :   ALTER TABLE public."Reinos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �           2604    18233    Trabajos id    DEFAULT     n   ALTER TABLE ONLY public."Trabajos" ALTER COLUMN id SET DEFAULT nextval('public."Trabajos_id_seq"'::regclass);
 <   ALTER TABLE public."Trabajos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            K          0    18261    Defensas 
   TABLE DATA           1   COPY public."Defensas" (id, defensa) FROM stdin;
    public          postgres    false    226   [N       L          0    18267    Defensas_Reinos 
   TABLE DATA           C   COPY public."Defensas_Reinos" (id_defensas, id_reinos) FROM stdin;
    public          postgres    false    227   �N       M          0    18272    Diplomacias 
   TABLE DATA           J   COPY public."Diplomacias" (id_reino_1, id_reino_2, es_aliado) FROM stdin;
    public          postgres    false    228   �N       F          0    18242    Karts 
   TABLE DATA           T   COPY public."Karts" (id, modelo, color, velocidad_maxima, id_personaje) FROM stdin;
    public          postgres    false    221   O       A          0    18223 
   Personajes 
   TABLE DATA           T   COPY public."Personajes" (id, nombre, fuerza, fecha_nacimiento, objeto) FROM stdin;
    public          postgres    false    216   �O       I          0    18254    Reinos 
   TABLE DATA           E   COPY public."Reinos" (id, nombre, ubicacion, superficie) FROM stdin;
    public          postgres    false    224   gR       C          0    18230    Trabajos 
   TABLE DATA           =   COPY public."Trabajos" (id, descripcion, sueldo) FROM stdin;
    public          postgres    false    218   �R       ?          0    18213    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          postgres    false    214   lS       G          0    18248    personaje_habita_reino 
   TABLE DATA           g   COPY public.personaje_habita_reino (id_personaje, id_reino, fecha_registro, es_gobernante) FROM stdin;
    public          postgres    false    222   VT       D          0    18236    personaje_tiene_trabajo 
   TABLE DATA           h   COPY public.personaje_tiene_trabajo (id_trabajo, id_personaje, fecha_inicio, fecha_termino) FROM stdin;
    public          postgres    false    219   4U       Y           0    0    Defensas_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Defensas_id_seq"', 3, true);
          public          postgres    false    225            Z           0    0    Karts_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Karts_id_seq"', 9, true);
          public          postgres    false    220            [           0    0    Personajes_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Personajes_id_seq"', 29, true);
          public          postgres    false    215            \           0    0    Reinos_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Reinos_id_seq"', 4, true);
          public          postgres    false    223            ]           0    0    Trabajos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Trabajos_id_seq"', 11, true);
          public          postgres    false    217            �           2606    18271 $   Defensas_Reinos Defensas_Reinos_pkey 
   CONSTRAINT     z   ALTER TABLE ONLY public."Defensas_Reinos"
    ADD CONSTRAINT "Defensas_Reinos_pkey" PRIMARY KEY (id_defensas, id_reinos);
 R   ALTER TABLE ONLY public."Defensas_Reinos" DROP CONSTRAINT "Defensas_Reinos_pkey";
       public            postgres    false    227    227            �           2606    18266    Defensas Defensas_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Defensas"
    ADD CONSTRAINT "Defensas_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Defensas" DROP CONSTRAINT "Defensas_pkey";
       public            postgres    false    226            �           2606    18276    Diplomacias Diplomacias_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_pkey" PRIMARY KEY (id_reino_1, id_reino_2);
 J   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_pkey";
       public            postgres    false    228    228            �           2606    18247    Karts Karts_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_pkey";
       public            postgres    false    221            �           2606    18228    Personajes Personajes_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Personajes"
    ADD CONSTRAINT "Personajes_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."Personajes" DROP CONSTRAINT "Personajes_pkey";
       public            postgres    false    216            �           2606    18259    Reinos Reinos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Reinos"
    ADD CONSTRAINT "Reinos_pkey" PRIMARY KEY (id);
 @   ALTER TABLE ONLY public."Reinos" DROP CONSTRAINT "Reinos_pkey";
       public            postgres    false    224            �           2606    18235    Trabajos Trabajos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Trabajos"
    ADD CONSTRAINT "Trabajos_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Trabajos" DROP CONSTRAINT "Trabajos_pkey";
       public            postgres    false    218            �           2606    18221 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            postgres    false    214            �           2606    18252 2   personaje_habita_reino personaje_habita_reino_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_pkey PRIMARY KEY (id_personaje, id_reino);
 \   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_pkey;
       public            postgres    false    222    222            �           2606    18240 4   personaje_tiene_trabajo personaje_tiene_trabajo_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_pkey PRIMARY KEY (id_trabajo, id_personaje);
 ^   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_pkey;
       public            postgres    false    219    219            �           2606    18302 0   Defensas_Reinos Defensas_Reinos_id_defensas_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Defensas_Reinos"
    ADD CONSTRAINT "Defensas_Reinos_id_defensas_fkey" FOREIGN KEY (id_defensas) REFERENCES public."Defensas"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 ^   ALTER TABLE ONLY public."Defensas_Reinos" DROP CONSTRAINT "Defensas_Reinos_id_defensas_fkey";
       public          postgres    false    226    3235    227            �           2606    18307 .   Defensas_Reinos Defensas_Reinos_id_reinos_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Defensas_Reinos"
    ADD CONSTRAINT "Defensas_Reinos_id_reinos_fkey" FOREIGN KEY (id_reinos) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 \   ALTER TABLE ONLY public."Defensas_Reinos" DROP CONSTRAINT "Defensas_Reinos_id_reinos_fkey";
       public          postgres    false    227    3233    224            �           2606    18312 '   Diplomacias Diplomacias_id_reino_1_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino_1_fkey" FOREIGN KEY (id_reino_1) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 U   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino_1_fkey";
       public          postgres    false    228    3233    224            �           2606    18317 '   Diplomacias Diplomacias_id_reino_2_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Diplomacias"
    ADD CONSTRAINT "Diplomacias_id_reino_2_fkey" FOREIGN KEY (id_reino_2) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 U   ALTER TABLE ONLY public."Diplomacias" DROP CONSTRAINT "Diplomacias_id_reino_2_fkey";
       public          postgres    false    3233    224    228            �           2606    18322    Karts Karts_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."Karts"
    ADD CONSTRAINT "Karts_id_personaje_fkey" FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 K   ALTER TABLE ONLY public."Karts" DROP CONSTRAINT "Karts_id_personaje_fkey";
       public          postgres    false    221    3223    216            �           2606    18292 ?   personaje_habita_reino personaje_habita_reino_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_personaje_fkey;
       public          postgres    false    222    216    3223            �           2606    18297 ;   personaje_habita_reino personaje_habita_reino_id_reino_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_habita_reino
    ADD CONSTRAINT personaje_habita_reino_id_reino_fkey FOREIGN KEY (id_reino) REFERENCES public."Reinos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 e   ALTER TABLE ONLY public.personaje_habita_reino DROP CONSTRAINT personaje_habita_reino_id_reino_fkey;
       public          postgres    false    224    3233    222            �           2606    18282 A   personaje_tiene_trabajo personaje_tiene_trabajo_id_personaje_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey FOREIGN KEY (id_personaje) REFERENCES public."Personajes"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 k   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_personaje_fkey;
       public          postgres    false    219    216    3223            �           2606    18277 ?   personaje_tiene_trabajo personaje_tiene_trabajo_id_trabajo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.personaje_tiene_trabajo
    ADD CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey FOREIGN KEY (id_trabajo) REFERENCES public."Trabajos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
 i   ALTER TABLE ONLY public.personaje_tiene_trabajo DROP CONSTRAINT personaje_tiene_trabajo_id_trabajo_fkey;
       public          postgres    false    218    3225    219            K   A   x�3�t+M-�JTp<��(5�˘�5�J�,�WI-*J-.)J�2�t/M,J�LTJM������ d�g      L      x�3�4�2�4�2�4�2�4��b���� '��      M      x�3�4�,�2�4�L�2�4�c���� +4z      F   �   x�=�1�0E��Sp�MFĈ```b��T�HnY�G�b(M����m}�Qt�B�P��j
=��sTgo�-�T���c�[��~?OTggѓ-p��ǘ��[K��_�䫎�_�$X��AK��נC@�ܽ!_�ǄEr3�ۖ�~�hEm      A   �  x�uTmn�@�������5Ʀ�
�CIhPA�Z��Ƭ`���v+z����X߮�����3o��Ap�������8�>06��u-t���I�Cܪh���)�r�,�7�Hm�S����Q��f	�V���Adr/�{o����*��u:(��иB�)yD���?����0ğ�v d���(�YS���߱�[wY
�{c�QCb)�k�y�Miб�R��Y?�m�����o�+��5��YAr��W�WB�c�-u�3hU����3�t�L�)�\���\vj�UU����	A) �r>(s�yV�jC#		�jmꦫ���j�CR-��&�V6��5�O"���5:j���k
�D��\SvM�*V x��b!by�m��ڇ0F�hD
,�]4A���vs�|N�C$}�Q�m��!��+���V��$���pTS��oйG��h3!,9<�r��.^y����`2����)���.H�����F�ں������L�>zλk=�j�li��Jm�f��bdR�X�j��C��G�zeх�[�LJc��>�r̝{�4�������_�)rj�M�|�Jĵa�sT�n��UsY�N۶�).�e
_�Z����{���(&�0u�,t��}���{��d���F�$�R%?P�X�u?�]0��z|q8      I   U   x�3�J���Wp�H�-�<����<N�ҼTS.#�J����|,jL�j��j�r�(1*1�*q-.)J��IĢ��,F��� �U8u      C   �   x�-�M
�@�יS�2m��l-*�p���b<�������<����pbR�$���upKq�P���F�����yf�fJ�E!����2�1��F/�wT�մ�#�e�t���L�D��[p��M�V����:����1�      ?   �   x�}��iCA�_i`����"R��hW�B�'��ds��'u)�my������$�+ǜvY�Db�Z��wb�$K�NN��;����D�������ׅ����� �ި_	36�WJ���_t�>�n����;u��&�䫎6jV#S]>"����C.
[��޾Ԋ�5�o�+4�F�\R`�<�Y�{>���@�c}�?rB�!����8��Y�      G   �   x�u���� Dϸ�m�+{��l-�L��	
���rʓyc  Kf�/����B@#�R2�b#�EYI!5"���IÏT:��b-39�'9O��=h	fO��{,\�J*]��K�n����`8���ZSh�&Z��<��ҡ���+_b���w�S�q٥/	�g/Œ�<���:�*�Nڕ�Ю�v�0������o"���H      D   �   x�e��m�0���)��
����!:��?G��΅@oM� M>_f?���A�%Q�(�&)�䖮�6�J��r=�\MZ<8sV�.��<匆�r�����ɞ5eFV�.���iT�] V��H��H�yEP�x�]5|T��mm���]Ɠ
��5�;��\0��o*�u�W��X���
W�ͩ���ȷ��,�q*m��1�a_��>Щ|�Ԝ��>������     
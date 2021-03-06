USE [ApartmentForRent]
GO
/****** Object:  Table [dbo].[AdditionalApartmentDetails]    Script Date: 18/05/2021 15:20:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdditionalApartmentDetails](
	[AdditionalApartmentID] [int] IDENTITY(1,1) NOT NULL,
	[IdApartment] [int] NULL,
	[Pool] [bit] NULL,
	[Terrace] [bit] NULL,
	[Image] [nvarchar](50) NULL,
	[Parking] [bit] NULL,
	[Recommendations] [int] NULL,
	[AdditionalDescription] [nvarchar](max) NULL,
 CONSTRAINT [PK_AdditionalApartmentDetails] PRIMARY KEY CLUSTERED 
(
	[AdditionalApartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApartmentDetails]    Script Date: 18/05/2021 15:20:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApartmentDetails](
	[ApartmentID] [int] IDENTITY(1,1) NOT NULL,
	[RentorId] [int] NULL,
	[City] [nvarchar](50) NULL,
	[Street] [nvarchar](50) NULL,
	[Floor] [int] NULL,
	[Elevator] [bit] NULL,
	[DisabledAccess] [bit] NULL,
	[NumberOfRooms] [int] NULL,
	[NumberOfBeds] [int] NULL,
	[NumberOfAirConditioners] [int] NULL,
	[IsRentingImmediately] [bit] NULL,
 CONSTRAINT [PK_ApartmentDetails] PRIMARY KEY CLUSTERED 
(
	[ApartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON ) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DateAvailable]    Script Date: 18/05/2021 15:20:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DateAvailable](
	[IdDateAvailable] [int] IDENTITY(1,1) NOT NULL,
	[IdRentor] [int] NULL,
	[ApartmentId] [int] NULL,
	[DateId] [int] NULL,
 CONSTRAINT [PK_DateAvailable] PRIMARY KEY CLUSTERED 
(
	[IdDateAvailable] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dates]    Script Date: 18/05/2021 15:20:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dates](
	[IdDate] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [date] NULL,
	[EndDate] [date] NULL,
 CONSTRAINT [PK_Dates] PRIMARY KEY CLUSTERED 
(
	[IdDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RentedApartment]    Script Date: 18/05/2021 15:20:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RentedApartment](
	[RentedApartmentId] [int] IDENTITY(1,1) NOT NULL,
	[ApartmentId] [int] NULL,
	[RentorId] [int] NULL,
	[DateId] [int] NULL,
 CONSTRAINT [PK_RentedApartment] PRIMARY KEY CLUSTERED 
(
	[RentedApartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RentorDetails]    Script Date: 18/05/2021 15:20:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RentorDetails](
	[IdRentor] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NOT NULL,
	[Mail] [nvarchar](50) NOT NULL,
	[Telephon] [nvarchar](50) NOT NULL,
	[AddaitionalPhone] [nvarchar](50) NULL,
 CONSTRAINT [PK_LandlordDetails] PRIMARY KEY CLUSTERED 
(
	[IdRentor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[RentorDetails] ON 

INSERT [dbo].[RentorDetails] ([IdRentor], [FirstName], [LastName], [Password], [Mail], [Telephon], [AddaitionalPhone]) VALUES (1, N'שלום', N'כהן', N'1234', N'shalom@gmail.con', N'0548457123', N'035709685')
INSERT [dbo].[RentorDetails] ([IdRentor], [FirstName], [LastName], [Password], [Mail], [Telephon], [AddaitionalPhone]) VALUES (2, N'שמחה', N'לוי', N'1111', N'123445@gmail.com', N'123456789', NULL)
INSERT [dbo].[RentorDetails] ([IdRentor], [FirstName], [LastName], [Password], [Mail], [Telephon], [AddaitionalPhone]) VALUES (3, N'יונה', N'קנופלמכר', N'1977', N'yk1977@gmail.com', N'0548490383', N'055676589')
INSERT [dbo].[RentorDetails] ([IdRentor], [FirstName], [LastName], [Password], [Mail], [Telephon], [AddaitionalPhone]) VALUES (4, N'שלמה', N'חדד', N'1478', N'shlomo1@gmail.com', N'0556720896', N'035794844')
INSERT [dbo].[RentorDetails] ([IdRentor], [FirstName], [LastName], [Password], [Mail], [Telephon], [AddaitionalPhone]) VALUES (7, N'שמעון', N'שטוקמן', N'1223', N'1234@gmail.com', N'0527112298', N'035780329')
SET IDENTITY_INSERT [dbo].[RentorDetails] OFF
GO
ALTER TABLE [dbo].[AdditionalApartmentDetails]  WITH CHECK ADD  CONSTRAINT [FK_AdditionalApartmentDetails_ApartmentDetails] FOREIGN KEY([IdApartment])
REFERENCES [dbo].[ApartmentDetails] ([ApartmentID])
GO
ALTER TABLE [dbo].[AdditionalApartmentDetails] CHECK CONSTRAINT [FK_AdditionalApartmentDetails_ApartmentDetails]
GO
ALTER TABLE [dbo].[ApartmentDetails]  WITH CHECK ADD  CONSTRAINT [FK_ApartmentDetails_RentorDetails] FOREIGN KEY([RentorId])
REFERENCES [dbo].[RentorDetails] ([IdRentor])
GO
ALTER TABLE [dbo].[ApartmentDetails] CHECK CONSTRAINT [FK_ApartmentDetails_RentorDetails]
GO
ALTER TABLE [dbo].[DateAvailable]  WITH CHECK ADD  CONSTRAINT [FK_DateAvailable_ApartmentDetails] FOREIGN KEY([ApartmentId])
REFERENCES [dbo].[ApartmentDetails] ([ApartmentID])
GO
ALTER TABLE [dbo].[DateAvailable] CHECK CONSTRAINT [FK_DateAvailable_ApartmentDetails]
GO
ALTER TABLE [dbo].[DateAvailable]  WITH CHECK ADD  CONSTRAINT [FK_DateAvailable_Dates] FOREIGN KEY([DateId])
REFERENCES [dbo].[Dates] ([IdDate])
GO
ALTER TABLE [dbo].[DateAvailable] CHECK CONSTRAINT [FK_DateAvailable_Dates]
GO
ALTER TABLE [dbo].[DateAvailable]  WITH CHECK ADD  CONSTRAINT [FK_DateAvailable_RentorDetails] FOREIGN KEY([IdRentor])
REFERENCES [dbo].[RentorDetails] ([IdRentor])
GO
ALTER TABLE [dbo].[DateAvailable] CHECK CONSTRAINT [FK_DateAvailable_RentorDetails]
GO
ALTER TABLE [dbo].[RentedApartment]  WITH CHECK ADD  CONSTRAINT [FK_RentedApartment_ApartmentDetails] FOREIGN KEY([ApartmentId])
REFERENCES [dbo].[ApartmentDetails] ([ApartmentID])
GO
ALTER TABLE [dbo].[RentedApartment] CHECK CONSTRAINT [FK_RentedApartment_ApartmentDetails]
GO
ALTER TABLE [dbo].[RentedApartment]  WITH CHECK ADD  CONSTRAINT [FK_RentedApartment_Dates] FOREIGN KEY([DateId])
REFERENCES [dbo].[Dates] ([IdDate])
GO
ALTER TABLE [dbo].[RentedApartment] CHECK CONSTRAINT [FK_RentedApartment_Dates]
GO
ALTER TABLE [dbo].[RentedApartment]  WITH CHECK ADD  CONSTRAINT [FK_RentedApartment_RentorDetails] FOREIGN KEY([RentorId])
REFERENCES [dbo].[RentorDetails] ([IdRentor])
GO
ALTER TABLE [dbo].[RentedApartment] CHECK CONSTRAINT [FK_RentedApartment_RentorDetails]
GO

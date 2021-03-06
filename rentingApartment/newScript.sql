USE [ApartmentsForRent]
GO
/****** Object:  Table [dbo].[Apartment]    Script Date: 07/06/2021 21:37:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Apartment](
	[ApartmentId] [int] IDENTITY(1,1) NOT NULL,
	[RentorId] [int] NULL,
	[City] [nvarchar](50) NULL,
	[Street] [nvarchar](50) NULL,
	[Floor] [int] NULL,
	[Elevator] [bit] NULL,
	[NumberOfRooms] [int] NULL,
	[NumberOfBeds] [int] NULL,
	[NumberOfAirConditioners] [int] NULL,
	[IsRentingImmediately] [bit] NULL,
	[ImmediatePrice] [nvarchar](50) NULL,
	[Price] [nvarchar](50) NULL,
	[DiscountPercentages] [nvarchar](50) NULL,
	[NumberOfDiscountDays] [nvarchar](50) NULL,
 CONSTRAINT [PK_Apartment] PRIMARY KEY CLUSTERED 
(
	[ApartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApartmentDetails]    Script Date: 07/06/2021 21:37:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApartmentDetails](
	[ApartmentDetailsID] [int] IDENTITY(1,1) NOT NULL,
	[IdApartment] [int] NULL,
	[Pool] [bit] NULL,
	[DisableAccess] [bit] NULL,
	[Porch] [int] NULL,
	[ImageSrc] [nvarchar](50) NULL,
	[Parking] [bit] NULL,
	[AdditionalDescription] [nvarchar](max) NULL,
	[Crib] [int] NULL,
 CONSTRAINT [PK_ApartmentDetail] PRIMARY KEY CLUSTERED 
(
	[ApartmentDetailsID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Dates]    Script Date: 07/06/2021 21:37:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dates](
	[DatesId] [int] IDENTITY(1,1) NOT NULL,
	[ApartmentId] [int] NULL,
	[StartDate] [date] NULL,
	[EndDate] [date] NULL,
	[Status] [bit] NULL,
 CONSTRAINT [PK_Dates] PRIMARY KEY CLUSTERED 
(
	[DatesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Recommendations]    Script Date: 07/06/2021 21:37:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Recommendations](
	[RecommendationsId] [int] IDENTITY(1,1) NOT NULL,
	[IdApartmentDetails] [int] NULL,
	[Recommendations] [nvarchar](max) NULL,
 CONSTRAINT [PK_Recommendations] PRIMARY KEY CLUSTERED 
(
	[RecommendationsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[RentorDetails]    Script Date: 07/06/2021 21:37:57 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RentorDetails](
	[IdRentor] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[Mail] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[AddaitionalPhone] [nvarchar](50) NULL,
 CONSTRAINT [PK_Rentor] PRIMARY KEY CLUSTERED 
(
	[IdRentor] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Apartment] ON 

INSERT [dbo].[Apartment] ([ApartmentId], [RentorId], [City], [Street], [Floor], [Elevator], [NumberOfRooms], [NumberOfBeds], [NumberOfAirConditioners], [IsRentingImmediately], [ImmediatePrice], [Price], [DiscountPercentages], [NumberOfDiscountDays]) VALUES (1, 1, N'ירושלים', N'כנפי נשרים', 1, 1, 5, 10, 7, 1, N'600', N'500', NULL, NULL)
SET IDENTITY_INSERT [dbo].[Apartment] OFF
GO
SET IDENTITY_INSERT [dbo].[RentorDetails] ON 

INSERT [dbo].[RentorDetails] ([IdRentor], [FirstName], [LastName], [Password], [Mail], [Phone], [AddaitionalPhone]) VALUES (1, N'שלמה', N'כהן', N'1234', N'shlomo@gmail.com', N'0548596111', N'035774585')
SET IDENTITY_INSERT [dbo].[RentorDetails] OFF
GO
ALTER TABLE [dbo].[Apartment]  WITH CHECK ADD  CONSTRAINT [FK_Apartment_RentorDetails] FOREIGN KEY([RentorId])
REFERENCES [dbo].[RentorDetails] ([IdRentor])
GO
ALTER TABLE [dbo].[Apartment] CHECK CONSTRAINT [FK_Apartment_RentorDetails]
GO
ALTER TABLE [dbo].[ApartmentDetails]  WITH CHECK ADD  CONSTRAINT [FK_ApartmentDetails_Apartment] FOREIGN KEY([IdApartment])
REFERENCES [dbo].[Apartment] ([ApartmentId])
GO
ALTER TABLE [dbo].[ApartmentDetails] CHECK CONSTRAINT [FK_ApartmentDetails_Apartment]
GO
ALTER TABLE [dbo].[Dates]  WITH CHECK ADD  CONSTRAINT [FK_Dates_Apartment] FOREIGN KEY([ApartmentId])
REFERENCES [dbo].[Apartment] ([ApartmentId])
GO
ALTER TABLE [dbo].[Dates] CHECK CONSTRAINT [FK_Dates_Apartment]
GO
ALTER TABLE [dbo].[Recommendations]  WITH CHECK ADD  CONSTRAINT [FK_Recommendations_ApartmentDetails] FOREIGN KEY([IdApartmentDetails])
REFERENCES [dbo].[ApartmentDetails] ([ApartmentDetailsID])
GO
ALTER TABLE [dbo].[Recommendations] CHECK CONSTRAINT [FK_Recommendations_ApartmentDetails]
GO
